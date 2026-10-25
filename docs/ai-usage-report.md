# 🤖 Báo Cáo Minh Bạch Sử Dụng AI (AI Usage Report) — CampusMind

> **Học phần:** Phát triển ứng dụng Web cơ bản — CSE122  
> **Đề tài:** BTL-02 · CampusMind – Nền tảng điều phối hỗ trợ sức khỏe tinh thần sinh viên TLU  
> **Nhóm thực hiện:** Nhóm 02 · 3 Sinh viên  

---

## 📌 1. Nguyên Tắc & Tuyên Bố Liêm Chính Học Thuật

Nhóm cam kết tuân thủ triết lý cốt lõi của môn học:
> *“AI giúp sinh viên đi nhanh hơn, nhưng GitHub, OBS, Teamwork, khả năng giải thích mã nguồn và chỉnh sửa trực tiếp (Live Modification) chứng minh sinh viên thực sự học, hiểu và làm chủ sản phẩm.”*

Toàn bộ mã nguồn do AI gợi ý đều được cả 3 sinh viên đọc hiểu từng dòng lệnh, đối chiếu với tài liệu chính thức (MDN Web Docs, Tailwind CSS Docs), gỡ bỏ mã rác và tự tay tái cấu trúc để đảm bảo tính liên thông và bảo mật của toàn hệ thống.

---

## 🛠️ 2. Bảng Kê Khai Chi Tiết Sử Dụng AI Cho Từng Thành Viên

### 2.1. Sinh viên 1 (SV1 - Chu Hữu Đăng - MSV 2551060595) — Phụ trách Khách & Giao diện dùng chung
- **Công cụ AI sử dụng:** Google Gemini 3.8 Flash.
- **Mục đích:** Gợi ý ý tưởng bố cục Design Tokens 8 màu và cấu trúc ngữ nghĩa HTML5 cho trang chủ giới thiệu.
- **Mẫu câu Prompt tiêu biểu:**
  > *"Hãy gợi ý bảng màu 8 Design Tokens mang âm hưởng trị liệu tâm lý (Sage, Amber, Clay, Ink, Paper) đảm bảo độ tương phản WCAG AA cho hệ thống hỗ trợ sức khỏe tinh thần trường đại học."*
  > *"Viết mẫu bộ câu hỏi trắc nghiệm sàng lọc ban đầu cho tính năng AI-1 Support Navigator không vi phạm đạo đức chẩn đoán y khoa."*
- **Phần AI sinh ra:** Cấu trúc sơ bộ các câu hỏi trắc nghiệm, các mã màu hex ban đầu.
- **Lỗi / Thiếu sót của AI phát hiện được:**
  - AI ban đầu đề xuất câu hỏi mang tính chẩn đoán bệnh lý tâm thần (trầm cảm lâm sàng, rối loạn lo âu nặng), vi phạm nguyên tắc đạo đức học đường.
  - Mã CSS ban đầu của AI bị tràn ngang (overflow-x) ở kích thước màn hình 320px do đặt kích thước cố định `px`.
- **Phần SV1 tự kiểm chứng và sửa chữa:**
  - Viết lại toàn bộ 4 câu hỏi định hướng theo ngữ cảnh học đường (áp lực thi cử, mâu thuẫn bạn bè, khó vào giấc ngủ).
  - Tự tay viết lại toàn bộ `css/styles.css` bằng CSS Variables (`:root`), thiết lập đơn vị tương đối `rem`/`%` và kiểm thử responsive trên Chrome DevTools 320px–375px.

---

### 2.2. Sinh viên 2 (SV2 - Vũ Hồng Phúc - MSV 2551060661) — Phụ trách Sinh viên & Luồng Đặt Lịch (Booking)
- **Công cụ AI sử dụng:** Google Gemini 3.8 Flash.
- **Mục đích:** Hỗ trợ phác thảo thuật toán chuyển bước Wizard 4 bước và cấu trúc dữ liệu mảng `appointments` trong LocalStorage.
- **Mẫu câu Prompt tiêu biểu:**
  > *"Viết thuật toán chuyển bước Wizard 4 bước bằng JavaScript thuần, có kiểm tra hợp lệ validation ở từng bước trước khi cho phép bấm nút Tiếp tục."*
- **Phần AI sinh ra:** Khung hàm `goToStep(stepNum)` và các lệnh ẩn/hiện class `hidden`.
- **Lỗi / Thiếu sót của AI phát hiện được:**
  - AI viết validation bằng hàm `alert()` thô sơ, vi phạm tiêu chí Barem Mục 5.2 (bị trừ -0.25đ nếu dùng `alert`).
  - Dữ liệu lịch hẹn do AI sinh chỉ lưu biến tạm thời trong bộ nhớ RAM, khi người dùng nhấn F5 tải lại trang là mất sạch toàn bộ dữ liệu.
- **Phần SV2 tự kiểm chứng và sửa chữa:**
  - Thay thế toàn bộ `alert()` bằng cơ chế báo lỗi inline hiển thị chữ đỏ ngay dưới ô nhập liệu và Toast notification.
  - Tự tay xây dựng mô-đun `js/data.js` kết nối `localStorage`, lưu trữ bền vững trạng thái `pending`, `confirmed`, `cancelled` và đồng bộ sang màn hình Chuyên viên.

---

### 2.3. Sinh viên 3 (SV3 - Nguyễn Thái Bảo - MSV 2551060584) — Phụ trách Chuyên viên, Quản trị & Phân quyền RBAC
- **Công cụ AI sử dụng:** Google Gemini 3.8 Flash.
- **Mục đích:** Tham khảo giải pháp mô phỏng tính năng AI-3 Counselor Summary Assistant và phân quyền RBAC.
- **Mẫu câu Prompt tiêu biểu:**
  > *"Xây dựng mô phỏng hàm tóm tắt biên bản tham vấn và trích xuất 3 hành động có thời hạn, có công tắc giả lập lỗi ngoại lệ khi ghi chú quá ngắn dưới 25 từ."*
- **Phần AI sinh ra:** Mẫu văn bản tóm tắt 3 câu và định dạng kế hoạch hành động.
- **Lỗi / Thiếu sót của AI phát hiện được:**
  - AI coi kết quả của mình luôn luôn đúng 100%, không cung cấp nút chỉnh sửa cho người dùng (vi phạm nguyên tắc Human-in-the-loop).
  - AI không có cơ chế xử lý ngoại lệ khi chuyên viên ghi chú quá sơ sài.
- **Phần SV3 tự kiểm chứng và sửa chữa:**
  - Bổ sung cơ chế đếm từ tự động (`words < 25`) để kích hoạt kịch bản AI Failure UX chuẩn theo Barem Mục 6.3.
  - Cho phép chuyên viên tự do gõ sửa trực tiếp vào kết quả trước khi bấm nút "Phê duyệt & Lưu vào hồ sơ".
  - Tự viết logic phân quyền Route Guard (`js/auth.js`) và trang `403.html` để chặn các truy cập trái phép giữa 4 vai trò.

---

## 🔒 3. Cam Kết An Toàn & Bảo Mật Mã Nguồn (Security & Safety)

1. **Tuyệt đối không lộ API Key / Secret Token (Vi phạm VP-01):** Hệ thống sử dụng cơ chế mô phỏng an toàn phía Client hoặc truyền khóa qua SessionStorage, mã nguồn đẩy lên GitHub không chứa bất kỳ secret key nào.
2. **Chống tấn công XSS (Vi phạm VP-02):** Tất cả các vị trí render văn bản do người dùng nhập (lý do tham vấn, ghi chú biên bản) đều được khử khuẩn qua hàm `escapeHTML()` hoặc gán qua `textContent`.
3. **Dữ liệu giả lập thực tế (Vi phạm VP-06):** 100% dữ liệu về tên dịch vụ, phòng tham vấn P.204 Nhà A1, tên chuyên gia và khoa đào tạo đều bám sát thực tế trường Đại học Thủy Lợi (TLU), không dùng "Lorem ipsum" hay "test 1, test 2".
