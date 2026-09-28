(() => {
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  const grid   = $('#grid');
  const cards  = $$('.card', grid);
  const q      = $('#q');
  const level  = $('#level');
  const status = $('#status');
  const sort   = $('#sort');
  const chips  = $$('.chip');
  const count  = $('#count');
  const empty  = $('#empty');
  const reset  = $('#reset');
  let group = 'all';
  const index = new Map();

  
  const norm = s => s.toLowerCase().normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');

  cards.forEach(c => index.set(c, norm([c.dataset.title, c.dataset.desc, c.dataset.code, c.dataset.level, $('.tag', c).textContent].join(' '))));

  /* ---------- lọc + sắp xếp ---------- */
  function render(){
    const text = norm(q.value.trim());
    const list = cards.slice();

    if(sort.value === 'asc')  list.sort((a, b) => a.dataset.price - b.dataset.price);
    if(sort.value === 'desc') list.sort((a, b) => b.dataset.price - a.dataset.price);
    if(sort.value === 'name') list.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name, 'vi'));

    let shown = 0;
    list.forEach(c => {
      const ok = (group === 'all' || c.dataset.group === group)
        && (!level.value  || c.dataset.level  === level.value)
        && (!status.value || c.dataset.status === status.value)
        && (!text || index.get(c).includes(text));
      c.hidden = !ok;
      if(ok) shown++;
      grid.appendChild(c);
    });

    count.innerHTML = `Hiển thị <b>${shown}</b> / ${cards.length} khóa học`;
    empty.hidden = shown > 0;
    grid.hidden  = shown === 0;
    reset.hidden = !(text || level.value || status.value || sort.value || group !== 'all');
  }

  function setGroup(g){
    group = g;
    chips.forEach(b => {
      const on = b.dataset.group === g;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', on);
    });
  }

  function clearFilters(){
    q.value = ''; level.value = ''; status.value = ''; sort.value = '';
    setGroup('all');
    render();
  }

  chips.forEach(b => b.addEventListener('click', () => { setGroup(b.dataset.group); render(); }));
  [q, level, status, sort].forEach(el => el.addEventListener('input', render));
  reset.addEventListener('click', clearFilters);
  $('#reset2').addEventListener('click', clearFilters);

  /* ---------- lưới / danh sách ---------- */
  const vGrid = $('#v-grid'), vList = $('#v-list');
  function setView(list){
    grid.classList.toggle('is-list', list);
    vList.classList.toggle('is-on', list);
    vGrid.classList.toggle('is-on', !list);
    vList.setAttribute('aria-pressed', list);
    vGrid.setAttribute('aria-pressed', !list);
  }
  vGrid.addEventListener('click', () => setView(false));
  vList.addEventListener('click', () => setView(true));

  /* ---------- modal ---------- */
  function openModal(id){
    const ov = document.getElementById(id);
    if(!ov) return;
    ov.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(ov){
    ov.classList.remove('open');
    if(!$('.overlay.open')) document.body.style.overflow = '';
  }

  /* ---------- xem nhanh: điền dữ liệu từ thẻ khóa học ---------- */
  function quickView(card){
    const d = card.dataset;
    $('#q-title').textContent  = d.title;
    $('#q-desc').textContent   = d.desc;
    $('#q-code').textContent   = d.code;
    $('#q-entry').textContent  = d.entry;
    $('#q-time').textContent   = `${d.sessions} buổi (${d.hours} giờ)`;
    $('#q-fee').textContent    = d.fee;
    $('#q-max').textContent    = `${d.max} học viên`;
    $('#q-status').innerHTML   = `<span class="badge ${d.status}">${d.statusLabel}</span>`;
    $('#q-detail').href        = `course-detail.html?id=${d.id}`;

    const reg = $('#q-reg');
    const paused = d.status === 'bad';
    reg.href = `course-detail.html?id=${d.id}#dang-ky`;
    reg.hidden = paused;
    openModal('m-quick');
  }

  /* ---------- toast ---------- */
  const toastEl = $('#toast');
  let toastTimer;
  function showToast(msg){
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2600);
  }

  /* ---------- form nhận tư vấn ---------- */
  $('#c-send')?.addEventListener('click', () => {
    const name = $('#c-name'), phone = $('#c-phone');
    const phoneOk = /^(\+84|0)\d{9}$/.test(phone.value.replace(/[\s.-]/g, ''));
    if(!name.value.trim() || !phoneOk){
      showToast('Vui lòng nhập họ tên và số điện thoại hợp lệ.');
      (name.value.trim() ? phone : name).focus();
      return;
    }
    showToast('Đã gửi yêu cầu tư vấn. Chúng tôi sẽ gọi lại sớm!');
    name.value = phone.value = '';
    closeModal($('#m-consult'));
  });

  /* ---------- click chung ---------- */
  document.addEventListener('click', e => {
    const quick = e.target.closest('[data-quick]');
    if(quick){ quickView(quick.closest('.card')); return; }

    const modalBtn = e.target.closest('[data-modal]');
    if(modalBtn){ e.preventDefault(); openModal(modalBtn.dataset.modal); return; }

    const toastBtn = e.target.closest('[data-toast]');
    if(toastBtn) showToast(toastBtn.dataset.toast);

    const closeBtn = e.target.closest('[data-close]');
    if(closeBtn){
      const ov = closeBtn.closest('.overlay');
      if(ov) closeModal(ov);
      return;
    }
    if(e.target.classList.contains('overlay')) closeModal(e.target);
  });

  document.addEventListener('keydown', e => {
    if(e.key === 'Escape') $$('.overlay.open').forEach(closeModal);
  });

  /* ---------- menu trên điện thoại ---------- */
  const burger = $('#burger'), nav = $('#nav');
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });

  /* ---------- nhận tham số từ trang khác: courses.html?group=thi&q=ielts ---------- */
  const params = new URLSearchParams(location.search);
  if(['thi', 'kids', 'work'].includes(params.get('group'))) setGroup(params.get('group'));
  if(params.get('q')) q.value = params.get('q');

  render();
})();