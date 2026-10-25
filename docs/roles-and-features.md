# 🛡️ ĐẶC TẢ VAI TRÒ & MA TRẬN CHỨC NĂNG NGHIỆP VỤ (ROLES & FEATURES)

> **Dự án:** CampusMind — Điều phối hỗ trợ sức khỏe tinh thần sinh viên (BTL-02 · CSE122)  
> **Khoa Công nghệ Thông tin — Trường Đại học Thủy Lợi (TLU)**  
> **Căn cứ:** Mục 6 & Mục 10 [BTL_02_campusmind_ieu_phoi_ho_tro_suc_khoe_tinh_than_sinh_vien.md]
---

## 1. Phân Tích 4 Vai Trò Nghiệp Vụ (RBAC)

### 1.1. Vai Trò 1: Khách Vãng Lai (Guest / Visitor)
* **Mục tiêu người dùng:** Tìm hiểu thông tin, khám phá các dịch vụ chăm sóc tinh thần trong trường và tiếp cận tài nguyên tự học để xây dựng niềm tin trước khi đặt lịch.
* **Tài khoản mẫu:** Không yêu cầu đăng nhập.
* **Nhiệm vụ & Chức năng chính:**
  - Tra cứu danh bạ 12 dịch vụ wellbeing (lọc theo danh mục: cá nhân, workshop, học tập, giấc ngủ, mối quan hệ).
  - Trải nghiệm tính năng **AI-1 Support Navigator**: Làm trắc nghiệm 4 câu hỏi định hướng dịch vụ phù hợp, nhận giải thích lý do, hỗ trợ hotline cấp cứu `1900 6012`.
  - Khám phá thư viện tài nguyên tự học (Audio thiền, bài tập thở 4-7-8 tương tác, cẩm nang vệ sinh giấc ngủ).
  - Xem hồ sơ chi tiết của chuyên gia tư vấn (bằng cấp, chuyên môn, lịch trực tuần).
* **Quyền hạn hệ thống:** **Read-only**. Khi bấm nút đặt lịch hẹn hoặc lưu tài nguyên cá nhân, hệ thống hiển thị CTA yêu cầu đăng nhập tài khoản sinh viên.

---

### 1.2. Vai Trò 2: Sinh Viên (Student)
* **Mục tiêu người dùng:** Đánh giá mức độ căng thẳng của bản thân, chủ động đăng ký ca tư vấn 1-1 bảo mật, quản lý lịch hẹn và nhận các gợi ý tài nguyên phục hồi phù hợp.
* **Tài khoản mẫu:** **Vũ Hồng Phúc** (`vuphucpa@gmail.com` / MSV: `2551060661` / Lớp: `64CNTT`).
* **Nhiệm vụ & Chức năng chính:**
  - **Bảng điều khiển cá nhân (Dashboard):** 4 chỉ số KPIs (ca sắp tới, số ca đã hoàn thành, ngày check-in tâm trạng, tài nguyên đã lưu).
  - **Nhật ký cảm xúc (Mood Tracker):** Check-in cảm xúc hàng ngày (5 mức độ: Tuyệt vời, Tốt, Bình thường, Căng thẳng, Kiệt sức) kèm ghi chú ngắn.
  - **Quy trình Đặt lịch 4 bước (Booking Wizard):**
    1. Chọn dịch vụ wellbeing.
    2. Chọn chuyên gia tư vấn & khung giờ còn trống.
    3. Nhập lý do tham vấn & nhận gợi ý tài nguyên tức thì từ **AI-2 Resource Recommender**.
    4. Xác nhận đặt lịch và lưu trữ vào LocalStorage.
  - **Quản lý lịch hẹn (Appointments Management):**
    - Xem danh sách ca hẹn theo tab trạng thái (Tất cả, Sắp tới/Confirmed, Chờ duyệt/Pending, Đã hoàn thành/Completed, Đã hủy/Cancelled).
    - Mở **Slide Drawer** xem chi tiết ca hẹn và bản tóm tắt lâm sàng từ AI-3 sau khi kết thúc ca.
    - Hủy ca hẹn an toàn (kèm lý do hủy để thông báo cho chuyên viên).
    - Xuất danh sách lịch hẹn ra file CSV (`CampusCommon.exportToCSV`).

---

### 1.3. Vai Trò 3: Chuyên Viên Tư Vấn (Counselor)
* **Mục tiêu người dùng:** Quản lý lịch làm việc tuần, tiếp nhận hồ sơ đăng ký tham vấn từ sinh viên, phê duyệt hoặc từ chối ca hẹn, và soạn thảo hồ sơ ghi chú ca tư vấn.
* **Tài khoản mẫu:** **TS. Nguyễn Minh Hà** (`ha.nm@tlu.edu.vn` / Mã GV: `GV0042` / Tâm lý học Lâm sàng).
* **Nhiệm vụ & Chức năng chính:**
  - **Quản lý lịch làm việc tuần (Counselor Schedule):** Bật/tắt mở khung giờ trực tư vấn từ Thứ Hai đến Thứ Bảy, thêm khung giờ linh hoạt mới.
  - **Hàng chờ tiếp nhận & Phê duyệt ca hẹn (Appointment Queue):**
    - Xem thông tin sinh viên đăng ký (Họ tên, MSV, Email, SĐT, lý do tham vấn).
    - Phê duyệt tiếp nhận ca (chuyển trạng thái sang `confirmed`).
    - Từ chối ca hẹn (chuyển trạng thái sang `cancelled` kèm phản hồi mang tính xây dựng).
    - Xuất danh sách hàng chờ ra file CSV.
  - **Soạn thảo ghi chú ca tham vấn & Trợ lý AI-3 (Session Note Assistant):**
    - Nhập biên bản thô của buổi tư vấn.
    - Bộ đếm từ tự động (Word counter) và thông báo tự động lưu nháp.
    - Tính năng **AI-3 Counselor Summary Assistant**: Tóm tắt biên bản thô thành **3 câu nhận định lâm sàng súc tích + 3 hành động tiếp theo có mốc thời gian**.
    - Công tắc kiểm thử ngoại lệ (**Failure test switch**) khi biên bản < 25 từ.

---

### 1.4. Vai Trò 4: Quản Trị Viên (Admin)
* **Mục tiêu người dùng:** Vận hành toàn bộ hệ thống dịch vụ hỗ trợ toàn trường, giám sát năng lực tiếp nhận, quản lý phân quyền tài khoản và nhật ký an toàn bảo mật y tế.
* **Tài khoản mẫu:** **Chu Hữu Đăng** (`admin@tlu.edu.vn` / Mã: `ADM001` / Quản trị hệ thống).
* **Nhiệm vụ & Chức năng chính:**
  - **Bảng điều hành quản trị (Admin Dashboard):** 4 chỉ số vĩ mô toàn trường, biểu đồ cột công suất tiếp nhận theo tuần, nhật ký kiểm toán (Audit Logs) thời gian thực.
  - **Quản trị danh mục dịch vụ CRUD (Service Management):**
    - Thêm dịch vụ mới (Modal Create có validation).
    - Chỉnh sửa thông tin dịch vụ (Modal Edit).
    - Tạm ẩn dịch vụ (Toggle Active / Archive).
    - Xóa an toàn dịch vụ (Modal Safe Delete có cảnh báo).
    - Lọc theo phân loại, tìm kiếm tức thì, xuất danh sách dịch vụ CSV.
  - **Quản lý người dùng & Phân quyền RBAC (User Management):**
    - Xem danh sách người dùng toàn trường kèm tab lọc vai trò (Student, Counselor, Admin, Suspended).
    - Thay đổi vai trò người dùng (Modal Change Role).
    - Khóa / Mở khóa tài khoản người dùng vi phạm quy chế.
    - Cảnh báo tuân thủ quy chuẩn bảo mật y tế HIPAA / FERPA (chỉ chuyên viên phụ trách mới xem được ghi chú tham vấn chi tiết).
    - Xuất danh sách tài khoản CSV.

---

## 2. Ma Trận Quyền Hạn Thực Thể (Entity Permissions Matrix)

| Thực Thể Dữ Liệu | Khách (Guest) | Sinh Viên (Student) | Chuyên Viên (Counselor) | Quản Trị Viên (Admin) | Ghi Chú Kỹ Thuật |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **`services`** (Dịch vụ) | **R** | **R** | **R** | **C · R · U · D** *(Archive)* | Quản trị tại `admin-service-management.html` |
| **`counselors`** (Chuyên gia) | **R** | **R** | **R · U** *(Hồ sơ của mình)* | **C · R · U · D** | Quản lý khung giờ và chuyên môn |
| **`availability`** (Khung giờ) | **R** | **R** *(Xem giờ trống)* | **C · R · U · D** | **R** | Quản lý tại `counselor-schedule.html` |
| **`appointments`** (Lịch hẹn) | — | **C · R · U** *(Hủy ca của mình)* | **R · U** *(Duyệt / Từ chối)* | **R · D** *(Xem toàn trường)* | Vòng đời: `pending` → `confirmed` / `cancelled` / `completed` |
| **`session_notes`** (Ghi chú lâm sàng) | — | **R** *(Chỉ xem tóm tắt AI-3)* | **C · R · U** | — *(Bảo mật y tế)* | Lưu riêng trong ca hẹn, không lộ cho Admin |
| **`resources`** (Tài nguyên tự học) | **R** | **R · U** *(Lưu vào yêu thích)* | **R** | **C · R · U · D** | Thư viện tự học và bài tập thở 4-7-8 |
| **`users`** (Tài khoản & RBAC) | — | **R · U** *(Hồ sơ cá nhân)* | **R · U** *(Hồ sơ cá nhân)* | **C · R · U · D** *(Khóa tài khoản)* | Quản trị tại `admin-user-management.html` |
