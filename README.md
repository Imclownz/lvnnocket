# 👑 Locket Gold VIP (DNS Profile & Shadowrocket)

Dự án mở khóa toàn diện **Locket Gold VIP** thế hệ mới (2026) hỗ trợ cả **2 phương pháp**:
1. **Cài đặt qua DNS Profile (.mobileconfig)**: 1 chạm cài đặt, **không cần app VPN, không tốn pin, hoạt động mượt mà trên cả 4G/5G/Wi-Fi**.
2. **Cài đặt qua Shadowrocket / Loon / Surge (.sgmodule / .conf)**: Tự chủ 100%, chạy offline trên máy.

---

## ✨ Tính Năng Nổi Bật (Độc Quyền)
- 📸 **16 Khung Ảnh Photobooth Hot Trend**:
  - Khung Hello Kitty Pastel
  - Locket Việt Nam
  - Sao lấp lánh (Sparkles)
  - Khủng long vàng
  - Công chúa (Pastel Cutout)
  - 4 mùa (Vintage Retro)
  - Xanh đại dương (Denim)
  - Scrapbook du lịch
  - Vịt tốt nghiệp
  - Cún con tiệm bánh
  - Gấu ngọt ngào
  - TV hồng retro
  - Doodle pastel
  - Khung ảnh Hello Kitty 2x2
  - Shin chan 2x2
  - Khung Hello Kitty cuti
- 🤖 **Ghép ảnh Photobooth & Nhãn dán AI Tự Động**: Tích hợp server render ảnh composited chất lượng cao, có cơ chế fallback không bao giờ bị đơ hay văng app.
- 📹 **Quay & Tải Lên Video 45 Giây**: Chuẩn tự nhiên `45.0s`, không giảm bitrate, không bị nén mờ hình, hỗ trợ chọn video từ thư viện (Camera Roll).
- 💬 **Bảo Toàn 100% Ghi Chú & Captions Gốc**: Giữ trọn bộ caption hệ thống (Poll, Nhạc Spotify/Apple Music, Thời tiết, Vị trí, Streak, Cung hoàng đạo...) + Thêm bộ **👑 Locket Gold VIP Captions** lên trên cùng.
- 🚫 **Gỡ Bỏ Hoàn Toàn Paywall Lịch Sử**: Không còn bị mờ ảnh cũ hay hiện popup *"Mở khóa bằng Locket Gold - Nâng cấp để xem ảnh của bạn và dùng các hiệu ứng ngày lễ khác"*.
- 🏅 **Huy hiệu Locket Gold Profile** vàng rực rỡ trên trang cá nhân.

---

## 🚀 CÁCH 1: Cài Đặt Bằng DNS Profile (Khuyên Dùng — Không Cần App VPN)

Phương pháp DNS sử dụng cấu hình DoH (DNS-over-HTTPS) chuẩn của Apple. Khi cài đặt, chỉ các truy vấn kích hoạt của Locket mới được điều hướng, toàn bộ ứng dụng khác và mạng internet hoạt động với tốc độ gốc 100%.

### Bước 1: Tải Hồ Sơ Cấu Hình
1. Mở trình duyệt **Safari** trên iPhone.
2. Dán link sau vào thanh địa chỉ và bấm **Đi tới**:
   ```text
   https://raw.githubusercontent.com/Imclownz/lvnnocket/master/dns/locket_gold.mobileconfig
   ```
3. Safari hiện thông báo: *"Trang web này đang cố gắng tải về một hồ sơ cấu hình. Bạn có muốn cho phép việc này không?"* -> Chọn **Cho phép** (Allow) -> **Đóng**.

### Bước 2: Cài Đặt Hồ Sơ
1. Mở **Cài đặt (Settings)** trên iPhone.
2. Nhấn vào mục **Đã tải về hồ sơ (Profile Downloaded)** ngay trên đầu.
3. Nhấn **Cài đặt (Install)** ở góc trên bên phải -> Nhập mật khẩu iPhone -> Nhấn **Cài đặt**.

### Bước 3: Bật Tin Cậy Chứng Chỉ Gốc (Bắt Buộc)
1. Vào **Cài đặt** -> **Cài đặt chung (General)** -> **Giới thiệu (About)**.
2. Kéo xuống dưới cùng, chọn **Cài đặt tin cậy chứng nhận (Certificate Trust Settings)**.
3. Tại mục *Bật tin cậy hoàn toàn cho các chứng nhận gốc*, gạt **BẬT (Xanh)** cho chứng chỉ **Locket Gold Pro CA** -> Chọn **Tiếp tục**.

### Bước 4: Tận Hưởng
- Vuốt đóng hẳn ứng dụng Locket (Kill app từ màn hình đa nhiệm).
- Mở lại Locket: Tài khoản của bạn đã được nâng cấp lên **Locket Gold VIP**, camera có nút bộ lọc Photobooth, quay video 45s và xem trọn vẹn lịch sử!

---

## ⚡ CÁCH 2: Cài Đặt Bằng Shadowrocket (Module / Config)

Nếu bạn muốn quản lý chứng chỉ cục bộ trên thiết bị qua ứng dụng **Shadowrocket**:

### Cách Dùng Module (.sgmodule):
1. Mở Shadowrocket -> Vào tab **Cấu hình (Config)**.
2. Chọn mục **Modules** -> Chọn **Cài đặt Module mới (Install Module)**.
3. Dán link module sau:
   ```text
   https://raw.githubusercontent.com/Imclownz/lvnnocket/master/locket60s.sgmodule
   ```
4. Bật Module lên. Đảm bảo bạn đã cài và tin cậy chứng chỉ HTTPS MITM của Shadowrocket.
5. Khởi động lại ứng dụng Locket.

### Link File Cấu Hình (.conf):
- `https://raw.githubusercontent.com/Imclownz/lvnnocket/master/locket.conf`
- `https://raw.githubusercontent.com/Imclownz/lvnnocket/master/lvnnocket.conf`

---

## 📸 Hướng Dẫn Sử Dụng Khung Photobooth & Nhãn Dán AI
1. Mở camera Locket -> Nhấn vào biểu tượng **Bộ lọc / Filter** ở góc camera.
2. Chọn danh mục **Photobooth Tất Cả ♡** hoặc **Cute & Hoạt Hình ♡**.
3. Chọn khung yêu thích (Hello Kitty, Locket VN, Sao lấp lánh...).
4. Căn góc mặt vào khung và bấm chụp! Ảnh sẽ được tự động lồng ghép viền Photobooth chuẩn nét để gửi cho bạn bè.

---

## 🛠 Khắc Phục Sự Cố
- **Nếu chưa thấy lên Gold ngay**: Vuốt tắt hẳn Locket trong đa nhiệm, bật/tắt chế độ máy bay 5 giây rồi mở lại Locket.
- **Nếu muốn gỡ DNS Profile**: Vào **Cài đặt** -> **Cài đặt chung** -> **Quản lý VPN & Thiết bị** -> Chọn hồ sơ **Locket Gold VIP DNS** -> Bấm **Xóa hồ sơ**.
