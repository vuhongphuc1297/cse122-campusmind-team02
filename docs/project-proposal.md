# 📘 Bản Thuyết Minh Dự Án (Project Proposal) — CampusMind

> **Học phần:** Phát triển ứng dụng Web cơ bản — CSE122  
> **Đề tài:** BTL-02 · CampusMind – Điều phối hỗ trợ sức khỏe tinh thần sinh viên  
> **Khoa Công nghệ Thông tin — Trường Đại học Thủy Lợi (TLU)**  
> **Nhóm thực hiện:** Nhóm 02 · 3 Sinh viên  

---

## 1. Ngữ Cảnh & Thực Trạng (Context)
Sinh viên trong môi trường đại học hiện đại phải đối mặt với áp lực gia tăng từ nhiều phía: cường độ thi cử, khối lượng đồ án lớn, thay đổi môi trường sống khi xa gia đình, mâu thuẫn phòng trọ và định hướng nghề nghiệp. Sức khỏe tinh thần (Wellbeing) là nền tảng cốt lõi ảnh hưởng trực tiếp đến kết quả học tập và chất lượng cuộc sống sinh viên.

Nhà trường hiện đã có phòng tham vấn tâm lý (P.204 Nhà A1) và các câu lạc bộ, nhưng kết nối giữa sinh viên và nguồn lực hỗ trợ còn rời rạc, phân tán và thụ động.

---

## 2. Bốn Phát Biểu Vấn Đề (Problem Statements P1–P4)
- **P1. Thông tin dịch vụ phân tán:** Sinh viên gặp khó khăn khi tìm kiếm danh sách dịch vụ tham vấn chính xác, đáng tin cậy và minh bạch về lịch trực của chuyên viên.
- **P2. Rào cản định kiến & Bối rối khi chọn nguồn hỗ trợ:** E ngại bị kỳ thị (stigma) khiến sinh viên rụt rè. Khó tự đánh giá tình trạng bản thân để chọn đúng hình thức: gặp chuyên viên 1-1, tham gia workshop hay tự thực hành bài tập.
- **P3. Quy trình đặt, đổi, hủy lịch thủ công:** Đăng ký qua biểu mẫu giấy hoặc email rời rạc dẫn đến xử lý chậm trễ, dễ trùng lịch/hủy lịch phút chót và thiếu cam kết bảo mật danh tính.
- **P4. Quá tải điều phối & Thiếu số liệu vận hành:** Chuyên viên mất nhiều thời gian cho việc xếp lịch thủ công, thiếu công cụ lưu trữ biên bản chuẩn hóa (Session Notes). Ban quản trị thiếu số liệu thời gian thực để phân bổ nguồn lực phòng trực.

---

## 3. Mục Tiêu Dự Án (Project Objectives O1–O7)
- **O1.** Xây dựng cổng điều phối tập trung đa vai trò, chuẩn hóa hành trình người dùng từ khám phá, sàng lọc, đặt hẹn đến đánh giá sau tham vấn.
- **O2.** Thiết kế đầy đủ giao diện cho 4 vai trò (Khách, Sinh viên, Chuyên viên, Quản trị), bảo đảm tính trọn vẹn của luồng nghiệp vụ.
- **O3.** Triển khai CRUD thực chất trên các thực thể cốt lõi gắn liền vòng đời dữ liệu (Tạo lịch, duyệt ca, đổi giờ, hủy hẹn, lưu biên bản, ẩn/hiện dịch vụ, khóa tài khoản).
- **O4.** Ứng dụng JavaScript/DOM thuần cho tìm kiếm, lọc đa tiêu chí, kiểm tra biểu mẫu (Validation), Side Drawer, Modal và cập nhật trạng thái.
- **O5.** Lưu trữ dữ liệu bền vững bằng LocalStorage và JSON khởi tạo phong phú, đảm bảo dữ liệu không bị mất sau khi F5 và đồng bộ giữa các vai trò.
- **O6.** Tích hợp 3 trải nghiệm AI mô phỏng theo chuẩn 6 bước Human-in-the-loop: AI-1 Support Navigator, AI-2 Resource Recommender, AI-3 Counselor Summary Assistant.
- **O7.** Làm việc nhóm bài bản bằng Git/GitHub (Branch, Conventional Commits, PR Review) và minh chứng Video OBS có mặt sinh viên.

---

## 4. Bốn Vai Trò Người Dùng (User Roles & RBAC)
1. **Khách (Visitor / Chưa đăng nhập):** Khám phá danh bạ dịch vụ, cẩm nang tự chăm sóc và hồ sơ chuyên gia; làm trắc nghiệm AI-1 (Read-only).
2. **Sinh viên (Student - Vũ Hồng Phúc):** Đăng nhập định danh, xem Dashboard cá nhân hóa, đặt lịch 4 bước (Wizard), quản lý lịch hẹn (Side Drawer, hủy/đổi lịch), theo dõi tâm trạng (Mood Tracker).
3. **Chuyên viên (Counselor - TS. Nguyễn Minh Hà):** Quản lý khung giờ khả dụng (Availability), tiếp nhận và phê duyệt/từ chối ca hẹn, ghi biên bản tham vấn kết hợp trợ lý AI-3.
4. **Quản trị viên (Admin - Nguyễn Minh Đức):** Giám sát KPIs vận hành toàn trường, biểu đồ công suất ngày, nhật ký kiểm toán (Audit Logs), CRUD dịch vụ và phân quyền người dùng.

---

## 5. Ma Trận Thực Thể Dữ Liệu & Vòng Đời Trạng Thái (Entities & Lifecycle)

| Thực Thể (Entity) | C | R | U | D / Action | Vòng đời trạng thái (State Lifecycle) | Lưu trữ |
| :--- | :---: | :---: | :---: | :---: | :--- | :--- |
| `services` | ✓ | ✓ | ✓ | Archive / Delete | `active` $\leftrightarrow$ `archived` | `localStorage` / `assets/data/services.json` |
| `counselors` | — | ✓ | ✓ | — | `available` $\leftrightarrow$ `locked` | `localStorage` / `assets/data/counselors.json` |
| `appointments` | ✓ | ✓ | ✓ | Cancel | `pending` $\rightarrow$ `confirmed` $\rightarrow$ `completed` (hoặc `cancelled`) | `localStorage` / `assets/data/appointments.json` |
| `resources` | — | ✓ | ✓ | Bookmark | `published` $\leftrightarrow$ `featured` | `localStorage` / `assets/data/resources.json` |
| `users` | ✓ | ✓ | ✓ | Suspend | `active` $\leftrightarrow$ `suspended` | `localStorage` / `assets/data/users.json` |
| `auditLogs` | ✓ | ✓ | — | — | Dòng thời gian sự kiện thời gian thực | `localStorage` |

---

## 6. Liên Kết Tài Nguyên Thiết Kế
- **Figma Design File:** [Link Dự án Figma CampusMind](file:///d:/E/NAM%202/HK%201/WEB/cse122-campusmind-team02/design/figma-link.txt)
- **Bản vẽ 24 Vector Mockups SVG:** [Thư mục design/mockups/]
- **Bảng kiểm kê màn hình 12 cột:** [docs/screen-inventory.md]
- **Báo cáo sử dụng AI:** [docs/ai-usage-report.md]
