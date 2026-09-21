<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chi tiết khóa học - Trung tâm Ngoại ngữ</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background: #f5f7fb;
            color: #333;
            line-height: 1.6;
        }

        /* HEADER */
        header {
            background: #2563eb;
            color: white;
            padding: 15px 8%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin-left: 20px;
            font-size: 16px;
        }

        nav a:hover {
            text-decoration: underline;
        }

        /* CONTAINER */
        .container {
            width: 85%;
            max-width: 1200px;
            margin: 35px auto;
        }

        /* BREADCRUMB */
        .breadcrumb {
            margin-bottom: 20px;
            color: #666;
        }

        .breadcrumb a {
            color: #2563eb;
            text-decoration: none;
        }

        /* COURSE HEADER */
        .course-header {
            background: white;
            border-radius: 12px;
            padding: 30px;
            display: grid;
            grid-template-columns: 40% 60%;
            gap: 30px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .course-image img {
            width: 100%;
            height: 280px;
            object-fit: cover;
            border-radius: 10px;
        }

        .course-info h1 {
            color: #1d4ed8;
            margin-bottom: 15px;
            font-size: 30px;
        }

        .course-info p {
            margin-bottom: 10px;
        }

        .price {
            font-size: 26px;
            font-weight: bold;
            color: #dc2626;
            margin: 15px 0;
        }

        .btn-register {
            display: inline-block;
            background: #2563eb;
            color: white;
            text-decoration: none;
            padding: 12px 25px;
            border-radius: 8px;
            margin-top: 10px;
            font-weight: bold;
        }

        .btn-register:hover {
            background: #1d4ed8;
        }

        /* CONTENT */
        .content-section {
            background: white;
            margin-top: 25px;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }

        .content-section h2 {
            color: #1d4ed8;
            margin-bottom: 20px;
        }

        .content-section ul {
            margin-left: 25px;
        }

        .content-section li {
            margin-bottom: 8px;
        }

        /* LESSON TABLE */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }

        table th,
        table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }

        table th {
            background: #eff6ff;
            color: #1d4ed8;
        }

        /* INSTRUCTOR */
        .teacher {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .teacher img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
        }

        /* REGISTER FORM */
        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            margin-bottom: 6px;
            font-weight: bold;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 11px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 15px;
        }

        .submit-btn {
            width: 100%;
            padding: 13px;
            background: #16a34a;
            color: white;
            border: none;
            border-radius: 7px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }

        .submit-btn:hover {
            background: #15803d;
        }

        /* FOOTER */
        footer {
            margin-top: 40px;
            background: #1e293b;
            color: white;
            text-align: center;
            padding: 25px;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
            .course-header {
                grid-template-columns: 1fr;
            }

            header {
                flex-direction: column;
                gap: 10px;
            }

            nav a {
                margin: 0 8px;
            }
        }
    </style>
</head>

<body>

    <!-- HEADER -->
    <header>
        <div class="logo">English Center</div>

        <nav>
            <a href="index.html">Trang chủ</a>
            <a href="courses.html">Khóa học</a>
        </nav>
    </header>


    <main class="container">

        <!-- BREADCRUMB -->
        <div class="breadcrumb">
            <a href="index.html">Trang chủ</a>
            /
            <a href="courses.html">Danh sách khóa học</a>
            / Tiếng Anh giao tiếp
        </div>


        <!-- COURSE INFORMATION -->
        <section class="course-header">

            <div class="course-image">
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                    alt="Khóa học tiếng Anh giao tiếp">
            </div>

            <div class="course-info">

                <h1>Tiếng Anh giao tiếp cơ bản</h1>

                <p>
                    <strong>Trình độ:</strong> Cơ bản
                </p>

                <p>
                    <strong>Thời lượng:</strong> 3 tháng
                </p>

                <p>
                    <strong>Lịch học:</strong> Thứ 3 - 5 - 7
                </p>

                <p>
                    <strong>Hình thức:</strong> Online / Offline
                </p>

                <div class="price">
                    2.500.000 VNĐ
                </div>

                <a href="#register" class="btn-register">
                    Đăng ký ngay
                </a>

            </div>

        </section>


        <!-- COURSE OBJECTIVES -->
        <section class="content-section">

            <h2>🎯 Mục tiêu khóa học</h2>

            <p>
                Khóa học giúp học viên xây dựng nền tảng tiếng Anh giao tiếp
                và tự tin sử dụng tiếng Anh trong các tình huống hàng ngày.
            </p>

            <ul>
                <li>Cải thiện kỹ năng nghe và phát âm.</li>
                <li>Giao tiếp trong các tình huống thông dụng.</li>
                <li>Mở rộng vốn từ vựng cơ bản.</li>
                <li>Tự tin giới thiệu bản thân và giao tiếp với người khác.</li>
            </ul>

        </section>


        <!-- COURSE CONTENT -->
        <section class="content-section">

            <h2>📚 Nội dung khóa học</h2>

            <table>

                <thead>
                    <tr>
                        <th>Buổi</th>
                        <th>Nội dung</th>
                        <th>Kỹ năng</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>Buổi 1</td>
                        <td>Giới thiệu bản thân</td>
                        <td>Nói - Phát âm</td>
                    </tr>

                    <tr>
                        <td>Buổi 2</td>
                        <td>Chào hỏi và giao tiếp hàng ngày</td>
                        <td>Nghe - Nói</td>
                    </tr>

                    <tr>
                        <td>Buổi 3</td>
                        <td>Gia đình và bạn bè</td>
                        <td>Từ vựng - Nói</td>
                    </tr>

                    <tr>
                        <td>Buổi 4</td>
                        <td>Mua sắm và hỏi giá</td>
                        <td>Giao tiếp</td>
                    </tr>

                    <tr>
                        <td>Buổi 5</td>
                        <td>Gọi món tại nhà hàng</td>
                        <td>Nghe - Nói</td>
                    </tr>

                    <tr>
                        <td>Buổi 6</td>
                        <td>Ôn tập và thực hành</td>
                        <td>Tổng hợp</td>
                    </tr>

                </tbody>

            </table>

        </section>


        <!-- INSTRUCTOR -->
        <section class="content-section">

            <h2>👨‍🏫 Giảng viên</h2>

            <div class="teacher">

                <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Giảng viên">

                <div>
                    <h3>Nguyễn Minh Anh</h3>
                    <p>
                        Thạc sĩ Ngôn ngữ Anh, 8 năm kinh nghiệm giảng dạy.
                    </p>

                    <p>
                        Chuyên môn: Tiếng Anh giao tiếp và phát âm.
                    </p>
                </div>

            </div>

        </section>


        <!-- REGISTER -->
        <section class="content-section" id="register">

            <h2>📝 Đăng ký học thử / Ghi danh</h2>

            <form>

                <div class="form-group">
                    <label for="fullname">Họ và tên</label>

                    <input
                        type="text"
                        id="fullname"
                        placeholder="Nhập họ và tên">
                </div>


                <div class="form-group">
                    <label for="phone">Số điện thoại</label>

                    <input
                        type="tel"
                        id="phone"
                        placeholder="Nhập số điện thoại">
                </div>


                <div class="form-group">
                    <label for="email">Email</label>

                    <input
                        type="email"
                        id="email"
                        placeholder="Nhập email">
                </div>


                <div class="form-group">
                    <label for="type">Hình thức đăng ký</label>

                    <select id="type">

                        <option>Học thử</option>
                        <option>Ghi danh chính thức</option>

                    </select>

                </div>


                <div class="form-group">
                    <label for="message">Ghi chú</label>

                    <textarea
                        id="message"
                        rows="4"
                        placeholder="Nội dung cần tư vấn..."></textarea>
                </div>


                <button type="submit" class="submit-btn">
                    Gửi đăng ký
                </button>

            </form>

        </section>


        <!-- BACK LINKS -->
        <section style="text-align:center; margin-top:25px;">

            <a href="courses.html" class="btn-register">
                ← Quay lại danh sách khóa học
            </a>

            <a
                href="index.html"
                class="btn-register"
                style="margin-left:10px;">
                Về trang chủ
            </a>

        </section>

    </main>


    <!-- FOOTER -->
    <footer>

        <p>© 2026 English Center</p>
        <p>Website quản lý trung tâm ngoại ngữ</p>

    </footer>

</body>
</html>
