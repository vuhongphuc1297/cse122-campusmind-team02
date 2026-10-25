# 👥 PHÂN CÔNG NHIỆM VỤ LÁT CẮT DỌC (VERTICAL SLICE ASSIGNMENT)

> **Học phần:** Phát triển ứng dụng Web cơ bản — CSE122 · BTL-02  
> **Dự án:** CampusMind — Điều phối hỗ trợ sức khỏe tinh thần sinh viên  
> **Nhóm thực hiện:** Nhóm 02 (3 sinh viên)  
> **Căn cứ pháp lý:** Mục 4 & Mục 5.2 Báo cáo Phân tích Bài toán CampusMind (BTL CSE122) và [docs/screen-inventory.md](screen-inventory.md)

---

## 📌 Nguyên Tắc Phân Công Bắt Buộc (Vertical Slice)

Quy chế BTL CSE122 quy định:
> *"Mỗi sinh viên phải tự hoàn thành ít nhất một luồng nghiệp vụ end-to-end từ Phân tích → Bản mô phỏng → HTML → CSS → JavaScript → Dữ liệu → Responsive → Git Branch → PR → OBS. Tuyệt đối không chấp nhận cách phân công theo chiều ngang (một người chỉ làm tài liệu/Figma, một người chỉ HTML, một người chỉ JS)."*

---

## 1. Phân Công Chi Tiết 3 Sinh Viên (Chuẩn Barem & Báo Cáo Phân Tích)

> Nhóm làm việc theo mô hình cộng tác bình đẳng (*không phân nhóm trưởng*), mỗi sinh viên chịu trách nhiệm độc lập và trọn vẹn một lát cắt dọc (Vertical Slice):

### 1.1. Sinh Viên 1 (SV1): Chu Hữu Đăng
* **Mã sinh viên:** `2551060595`
* **Email:** `chuhuudang2007@gmail.com`
* **Vai trò nghiệp vụ chính:** **Cổng Khách Vãng Lai (Visitor)** & **Giao diện dùng chung ban đầu**
* **Luồng màn hình phụ trách (5 màn hình):**
  1. `index.html` (Landing Page & Hero TLU - 4 lối vào dịch vụ)
  2. `pages/visitor-service-directory.html` (Danh bạ 12 dịch vụ Wellbeing)
  3. `pages/visitor-resource-library.html` (Thư viện tài nguyên tự chăm sóc & Đồng hồ thở 4-7-8)
  4. `pages/visitor-counselor-detail.html` (Hồ sơ chuyên gia TS. Nguyễn Minh Hà)
  5. `pages/login.html` (Đăng nhập hệ thống & Chuyển vai trò 1-Click)
* **Trục chéo kỹ thuật & Nền tảng đảm nhận:**
  - Xây dựng nền tảng thiết kế dùng chung: Hệ thống Design Tokens 8 màu (`css/styles.css`), Typography, Color Palette, Component Library base.
  - Cấu trúc layout chung (Header, Navigation, Footer, Demo Dock nổi chuyển vai trò).
  - Tối ưu chuẩn khả năng tiếp cận (A11y WCAG 2.1 AA, Focus Ring, Contrast Ratio).
* **Nhánh Git phụ trách:** `feature/landing-page`, `feature/visitor-services`, `feature/visitor-resources`, `feature/visitor-counselor`, `feature/auth-login`
* **Video OBS minh chứng:** `SV1-01-index.mp4`, `SV1-02-visitor-service-directory.mp4`, `SV1-03-visitor-resource-library.mp4`, `SV1-04-visitor-counselor-detail.mp4`, `SV1-05-login.mp4`

---

### 1.2. Sinh Viên 2 (SV2): Vũ Hồng Phúc
* **Mã sinh viên:** `2551060661`
* **Email:** `vuphucpa@gmail.com`
* **Vai trò nghiệp vụ chính:** **Sinh viên (Student)** & **Tài khoản Sinh viên**
* **Luồng màn hình phụ trách (5 màn hình):**
  1. `pages/student-dashboard.html` (Bảng điều khiển sinh viên, 4 KPIs cá nhân & Mood Tracker)
  2. `pages/student-booking.html` (Quy trình đặt lịch 4 bước - Booking Wizard có validation)
  3. `pages/student-appointments.html` (Quản lý lịch hẹn cá nhân, Slide Drawer & Hủy ca an toàn)
  4. `pages/register.html` (Đăng ký tài khoản sinh viên mới có validation)
  5. `pages/profile.html` (Hồ sơ cá nhân & Cài đặt thông báo)
* **Trục chéo kỹ thuật & Nền tảng đảm nhận:**
  - Xử lý kiến trúc lưu trữ dữ liệu phía client: Quản lý tập trung LocalStorage Engine (`js/data.js`), hạt giống dữ liệu mẫu (Seed Data) cho dịch vụ, chuyên gia, ca hẹn.
  - Tích hợp và điều khiển các tính năng AI mô phỏng phía client:
    + **AI-1 (Support Navigator):** Trắc nghiệm 4 câu định hướng dịch vụ phù hợp kèm giải thích minh bạch.
    + **AI-2 (Resource Recommender):** Đề xuất tài nguyên tự học dựa trên phân loại cảm xúc và lý do đặt lịch.
  - Xử lý đồng bộ đa tab (`setupCrossTabSync`), xuất dữ liệu lịch hẹn CSV (`CampusCommon.exportToCSV`).
* **Nhánh Git phụ trách:** `feature/student-dashboard`, `feature/student-booking`, `feature/student-appointments`, `feature/auth-register`, `feature/user-profile`
* **Video OBS minh chứng:** `SV2-01-student-dashboard.mp4`, `SV2-02-student-booking-wizard.mp4`, `SV2-03-student-appointments-drawer.mp4`, `SV2-04-register.mp4`, `SV2-05-profile.mp4`

---

### 1.3. Sinh Viên 3 (SV3): Nguyễn Thái Bảo
* **Mã sinh viên:** `2551060584`
* **Email:** `loxuyen89576@gmail.com`
* **Vai trò nghiệp vụ chính:** **Chuyên viên Tư vấn (Counselor)** & **Quản trị viên (Admin)**
* **Luồng màn hình phụ trách (8 màn hình):**
  1. `pages/counselor-schedule.html` (Quản lý khung giờ trực tuần của chuyên gia)
  2. `pages/counselor-appointment-queue.html` (Hàng chờ tiếp nhận, phê duyệt/từ chối ca tham vấn)
  3. `pages/counselor-session-note.html` (Soạn thảo ghi chép ca tham vấn lâm sàng & Trợ lý AI-3)
  4. `pages/admin-dashboard.html` (Bảng điều hành quản trị toàn trường, 4 KPIs vận hành & Audit Logs)
  5. `pages/admin-service-management.html` (Quản trị danh mục dịch vụ Wellbeing CRUD đầy đủ)
  6. `pages/admin-user-management.html` (Quản lý người dùng, phân quyền RBAC và khóa/mở tài khoản)
  7. `pages/403.html` (Trang cảnh báo từ chối truy cập RBAC Route Guard)
  8. `pages/404.html` (Trang thông báo không tìm thấy tài nguyên Not Found)
* **Trục chéo kỹ thuật & Nền tảng đảm nhận:**
  - Quản lý cơ chế phân quyền bảo mật RBAC (`js/auth.js`) và Route Guard bảo vệ các trang chuyên sâu.
  - Tích hợp tính năng **AI-3 (Counselor Summary Assistant):** Tự động tóm tắt 3 câu, trích xuất 3 hành động kế tiếp và nút chuyển trạng thái lỗi mô phỏng (Failure Test switch).
  - Tối ưu hiển thị đa thiết bị (Responsive Desktop 1440px / Tablet 768px / Mobile 390px), điều phối trang `showcase.html`, kiểm soát chất lượng tích hợp và giải quyết xung đột khi Merge PR vào nhánh `dev`.
* **Nhánh Git phụ trách:** `feature/counselor-schedule`, `feature/counselor-queue`, `feature/counselor-note`, `feature/admin-dashboard`, `feature/admin-services`, `feature/admin-users`, `feature/error-403`, `feature/error-404`
* **Video OBS minh chứng:** `SV3-01-counselor-schedule.mp4`, `SV3-02-counselor-queue.mp4`, `SV3-03-counselor-note-ai3.mp4`, `SV3-04-admin-dashboard.mp4`, `SV3-05-admin-services.mp4`, `SV3-06-admin-users.mp4`, `SV3-07-error-pages.mp4`

---

## 2. Ma Trận Đóng Góp & Tiến Độ Cam Kết

| Thành Viên | Thiết kế Mockup | HTML5 Ngữ nghĩa | CSS Tokens | JavaScript DOM | Xử lý Dữ liệu / AI | Responsive | Kiểm thử & OBS | Tỷ Lệ Đóng Góp |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Chu Hữu Đăng (SV1)** | 100% | 100% | 100% | 100% | 100% | 100% | 100% | **33.33%** |
| **Vũ Hồng Phúc (SV2)** | 100% | 100% | 100% | 100% | 100% | 100% | 100% | **33.33%** |
| **Nguyễn Thái Bảo (SV3)** | 100% | 100% | 100% | 100% | 100% | 100% | 100% | **33.33%** |
| **Tổng cộng** | — | — | — | — | — | — | — | **100%** |
