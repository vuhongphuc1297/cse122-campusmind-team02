# 📋 Bảng Kiểm Kê Màn Hình Hệ Thống (Screen Inventory) — CampusMind

> **Học phần:** Phát triển ứng dụng Web cơ bản — CSE122  
> **Đề tài:** BTL-02 · CampusMind – Điều phối hỗ trợ sức khỏe tinh thần sinh viên  
> **Nhóm thực hiện:** Nhóm 02 · 3 Sinh viên (SV1, SV2, SV3)  
> **Tiêu chuẩn Barem:** Đáp ứng đầy đủ 12 cột kiểm toán theo Mục 1.2 & Gatekeeper ĐK1 Barem chấm điểm CSE122.

---

| STT | Role (Vai trò) | User Goal (Mục tiêu) | User Task (Nhiệm vụ) | Screen (Tên màn hình) | File (Tệp HTML) | CRUD | States (Bao phủ trạng thái) | AI (Tính năng AI) | Assignee (Phụ trách) | Task ID | Branch | Video OBS Link |
| :---: | :--- | :--- | :--- | :--- | :--- | :---: | :--- | :---: | :---: | :---: | :--- | :--- |
| **01** | Chung / Khách | Cửa ngõ truy cập toàn trường, tìm hiểu tổng quan | Xem thông điệp chính, 4 lối vào dịch vụ, đường dây nóng | Trang chủ & Hero TLU | `index.html` | R | Normal, Active | — | SV1 | `TASK-01` | `feature/landing-page` | `SV1-01-index.mp4` |
| **02** | Khách / SV | Khám phá danh mục tham vấn, định hướng nhu cầu | Tìm kiếm từ khóa, lọc phân loại, làm trắc nghiệm AI | Danh bạ dịch vụ & AI-1 | `pages/visitor-service-directory.html` | R | Normal, Empty, Loading, Error | ✦ AI-1 Navigator (6 bước) | SV1 | `TASK-02` | `feature/visitor-services` | `SV1-02-visitor-service-directory.mp4` |
| **03** | Khách / SV | Tự rèn luyện, giải tỏa căng thẳng tức thì | Thực hành bài tập thở 4-7-8, đọc cẩm nang ngủ ngon | Thư viện tài nguyên & AI-2 | `pages/visitor-resource-library.html` | R | Normal, Empty, Interactive | ✦ AI-2 Recommender | SV1 | `TASK-03` | `feature/visitor-resources` | `SV1-03-visitor-resource-library.mp4` |
| **04** | Khách / SV | Đánh giá năng lực và quỹ thời gian chuyên gia | Xem bằng cấp, đánh giá sao, lịch trực tuần minh bạch | Hồ sơ TS. Nguyễn Minh Hà | `pages/visitor-counselor-detail.html` | R | Normal, Active slots, Locked slots | — | SV1 | `TASK-04` | `feature/visitor-counselor` | `SV1-04-visitor-counselor-detail.mp4` |
| **05** | Sinh viên | Nắm bắt tổng quan lộ trình tâm lý cá nhân | Theo dõi ca hẹn sắp tới, ghi nhận Mood Tracker | Bảng điều khiển sinh viên | `pages/student-dashboard.html` | R | Normal, Interactive Mood, Upcoming | ✦ AI-2 Cá nhân hóa | SV2 | `TASK-05` | `feature/student-dashboard` | `SV2-05-student-dashboard.mp4` |
| **06** | Sinh viên | Đặt lịch tư vấn bảo mật, chọn giờ phù hợp | Chọn dịch vụ $\rightarrow$ Chuyên gia $\rightarrow$ Khung giờ $\rightarrow$ Lý do | Đặt lịch tư vấn (Wizard 4 bước) | `pages/student-booking.html` | C/R | Step Validation, Slot active/locked, Loading | ✦ AI-2 Gợi ý chuẩn bị | SV2 | `TASK-06` | `feature/student-booking` | `SV2-06-student-booking.mp4` |
| **07** | Sinh viên | Quản lý, điều chỉnh và xem lại lịch sử hỗ trợ | Lọc theo trạng thái, mở Side Drawer, đổi lịch, hủy ca | Quản lý lịch hẹn & Drawer | `pages/student-appointments.html` | R/U/D | Normal, Pending, Confirmed, Cancelled, Empty | — | SV2 | `TASK-07` | `feature/student-appointments` | `SV2-07-student-appointments.mp4` |
| **08** | Chuyên viên | Tiếp nhận và điều phối các yêu cầu từ sinh viên | Xem lý do, tiếp nhận (phê duyệt) hoặc từ chối kèm lý do | Hàng chờ duyệt ca tư vấn | `pages/counselor-appointment-queue.html` | R/U | Normal, Empty, Modal decline reason | — | SV3 | `TASK-08` | `feature/counselor-queue` | `SV3-08-counselor-appointment-queue.mp4` |
| **09** | Chuyên viên | Thiết lập quỹ thời gian làm việc hàng tuần | Bật/tắt ca trực Thứ 2 - Thứ 7, thêm slot mới, khóa bận | Quản lý lịch làm việc tuần | `pages/counselor-schedule.html` | C/R/U/D | Normal, Locked slots, Modal add slot | — | SV3 | `TASK-09` | `feature/counselor-schedule` | `SV3-09-counselor-schedule.mp4` |
| **10** | Chuyên viên | Soạn thảo biên bản lâm sàng bảo mật sau buổi gặp | Nhập ghi chép thô, kích hoạt AI-3, duyệt lưu vào hồ sơ | Ghi chú ca tư vấn & AI-3 | `pages/counselor-session-note.html` | C/R/U | Auto-save, Word count, Failure test toggle | ✦ AI-3 Summary (6 bước) | SV3 | `TASK-10` | `feature/counselor-note` | `SV3-10-counselor-session-note.mp4` |
| **11** | Quản trị | Giám sát toàn diện hoạt động hỗ trợ sinh viên TLU | Xem 4 KPIs vận hành, biểu đồ công suất ngày, Audit Logs | Bảng điều phối vận hành toàn trường | `pages/admin-dashboard.html` | R | Normal, Dynamic chart, Real-time logs | — | SV3 | `TASK-11` | `feature/admin-dashboard` | `SV3-11-admin-dashboard.mp4` |
| **12** | Quản trị | Quản lý danh mục dịch vụ Wellbeing toàn hệ thống | Thêm mới dịch vụ, sửa thông tin, ẩn/hiện, xóa an toàn | Quản lý dịch vụ CRUD | `pages/admin-service-management.html` | C/R/U/D | Normal, Filter, Modal Form, Modal Delete | — | SV3 | `TASK-12` | `feature/admin-services` | `SV3-12-admin-service-management.mp4` |
| **13** | Quản trị | Kiểm soát tài khoản người dùng & Quyền hạn | Lọc vai trò, đổi quyền RBAC, khóa/mở khóa tài khoản | Quản lý người dùng & RBAC | `pages/admin-user-management.html` | R/U | Normal, Suspended, Modal Change Role | — | SV3 | `TASK-13` | `feature/admin-users` | `SV3-13-admin-user-management.mp4` |
| **14** | Dùng chung | Xác thực người dùng & Trình diễn demo BTL | Đăng nhập form chuẩn, 1-Click chuyển nhanh 4 vai trò | Đăng nhập & Chuyển vai trò | `pages/login.html` | R | Inline validation, Show/Hide password | — | SV1 | `TASK-14` | `feature/auth-login` | `SV1-14-login.mp4` |
| **15** | Dùng chung | Khởi tạo tài khoản sinh viên mới tại trường | Nhập thông tin, kiểm tra mã sinh viên, xác nhận mật khẩu | Đăng ký tài khoản sinh viên | `pages/register.html` | C | Form validation chặt chẽ (HTML5 + JS) | — | SV2 | `TASK-15` | `feature/auth-register` | `SV2-15-register.mp4` |
| **16** | Dùng chung | Cập nhật thông tin cá nhân & Thiết lập thông báo | Xem hồ sơ, sửa số điện thoại/email, bật thông báo | Hồ sơ cá nhân & Cài đặt | `pages/profile.html` | R/U | Form update, Notification toggles | — | SV2 | `TASK-16` | `feature/user-profile` | `SV2-16-profile.mp4` |
| **17** | Lỗi RBAC | Cảnh báo khi người dùng truy cập vượt quyền hạn | Giải thích chính sách RBAC, nút chuyển vai trò nhanh | Lỗi 403 Forbidden Access | `pages/403.html` | R | Friendly error, Role Switcher fallback | — | SV3 | `TASK-17` | `feature/error-403` | `SV3-17-403.mp4` |
| **18** | Lỗi 404 | Điều hướng an toàn khi gõ sai đường dẫn | Thông điệp thông cảm, nút quay lại trang dịch vụ | Lỗi 404 Not Found | `pages/404.html` | R | Therapeutic 404, Safe exit buttons | — | SV3 | `TASK-18` | `feature/error-404` | `SV3-18-404.mp4` |
| **19** | Kiểm thử | Trình diễn đa thiết bị phục vụ chấm thi BTL | Giả lập 3 khung nhìn (1440px, 768px, 390px), đổi role | Showcase Hub 3 Viewports | `showcase.html` | R | Desktop, Tablet, Mobile, Reset LocalStorage | — | SV1/SV3 | `TASK-19` | `feature/showcase-hub` | `SV1-19-showcase.mp4` |

---

## 👥 Ma Trận Phân Công Lát Cắt Dọc & Trách Nhiệm Chéo

### 1. Phân chia Lát cắt dọc (Vertical Slice):
- **Sinh viên 1 (SV1 - Chu Hữu Đăng - 2551060595):** Phụ trách toàn bộ luồng Khách (Visitor) & Trang công khai (`index.html`, `pages/visitor-service-directory.html`, `pages/visitor-resource-library.html`, `pages/visitor-counselor-detail.html`, `pages/login.html`). Tự hoàn thành từ Mockup Figma $\rightarrow$ HTML/CSS $\rightarrow$ JS Search/Filter/Breathing $\rightarrow$ Commit $\rightarrow$ OBS.
- **Sinh viên 2 (SV2 - Vũ Hồng Phúc - 2551060661):** Phụ trách toàn bộ luồng Sinh viên (Student) & Đặt lịch (`pages/student-dashboard.html`, `pages/student-booking.html`, `pages/student-appointments.html`, `pages/register.html`, `pages/profile.html`). Tự hoàn thành từ Mockup Figma $\rightarrow$ Wizard 4 bước $\rightarrow$ LocalStorage $\rightarrow$ Side Drawer $\rightarrow$ Commit $\rightarrow$ OBS.
- **Sinh viên 3 (SV3 - Nguyễn Thái Bảo - 2551060584):** Phụ trách luồng Chuyên viên (Counselor) & Quản trị (Admin) (`pages/counselor-schedule.html`, `pages/counselor-appointment-queue.html`, `pages/counselor-session-note.html`, `pages/admin-dashboard.html`, `pages/admin-service-management.html`, `pages/admin-user-management.html`, `pages/403.html`, `pages/404.html`). Tự hoàn thành từ Mockup Figma $\rightarrow$ CRUD $\rightarrow$ RBAC $\rightarrow$ Commit $\rightarrow$ OBS.

### 2. Trách nhiệm chéo bắt buộc (Cross-Responsibility):
- **Trục chéo 1 (SV1):** Thiết kế hệ sinh thái Design System 8 Tokens (`css/styles.css`), Điều hướng thống nhất (Header/Footer), Thanh công cụ nổi chuyển vai trò (Demo Dock) & Khả năng tiếp cận (Accessibility - A11y).
- **Trục chéo 2 (SV2):** Kiến trúc JavaScript tập trung (`js/data.js`, `js/ai-engine.js`), Quản lý dữ liệu giả lập LocalStorage, Chuẩn hóa 6 bước trải nghiệm AI UX.
- **Trục chéo 3 (SV3):** Kiểm thử Responsive đa thiết bị (Desktop/Tablet/Mobile), Hợp nhất nhánh Git (PR Review), Quản lý phân quyền RBAC (`js/auth.js`) và Đảm bảo chất lượng (QA).
