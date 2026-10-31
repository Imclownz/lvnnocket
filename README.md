# 🚀 LOCKET 60S & GOLD + SHADOWROCKET CONFIGS (MÃ NGUỒN MỞ MIỄN PHÍ)

> Bộ cấu hình (`.config`) và Module (`.sgmodule`) mở khóa **Locket Gold**, **Quay Video Locket 60s**, **Tải Video 60s Từ Thư Viện (Camera Roll)**, **Khung Caption & Viền Widget**, **YouTube Premium** và **Spotify Premium** trên iOS qua ứng dụng **Shadowrocket**.
> **Đã tích hợp công nghệ Anti-QUIC (UDP 443), Anti-Revoke chứng chỉ Apple, chặn rò rỉ Apple Relay (tương thích hoàn hảo iOS 15 - 18).**

---

## 🔗 1. DANH SÁCH URL CẤU HÌNH (CHỈ CẦN COPY & DÁN VÀO SHADOWROCKET)

> 💡 **Mẹo:** Nếu bạn fork repo này về tài khoản GitHub của riêng bạn (`tên-bạn/tên-repo`), chỉ cần thay `Imclownz/lvnnocket` trong đường dẫn bên dưới bằng tên repo của bạn.

### 🌟 Module Locket 60s & Gold VIP (Khuyên dùng)
Mở khóa Locket Gold vĩnh viễn + Quay & đăng video 60 giây (kể cả từ Cuộn Camera) + Khung Caption & Widget:
```text
https://raw.githubusercontent.com/Imclownz/lvnnocket/refs/heads/master/locket60s.sgmodule
```

### 💗 Module Locket 60s (Bản kèm sẵn 8 Caption Preset)
```text
https://raw.githubusercontent.com/Imclownz/lvnnocket/refs/heads/master/locket60sprivate.sgmodule
```

### ⚡ Locket Gold Config (Cấu hình cơ bản)
```text
https://raw.githubusercontent.com/Imclownz/lvnnocket/refs/heads/master/locketgoldbyanhtuaan.config
```

### 🔥 All-In-One Config (Locket Gold + YouTube + Spotify 3 trong 1)
```text
https://raw.githubusercontent.com/Imclownz/lvnnocket/refs/heads/master/allinone.config
```

### ▶️ YouTube Premium Config (Chặn quảng cáo, phát nền & PiP)
```text
https://raw.githubusercontent.com/Imclownz/lvnnocket/refs/heads/master/youtubepremium.config
```

### 🎵 Spotify Premium Config
```text
https://raw.githubusercontent.com/Imclownz/lvnnocket/refs/heads/master/spotify.config
```

---

## 🛡️ 2. HỒ SƠ DNS DUY TRÌ LOCKET VĨNH VIỄN & CHỨNG CHỈ ROOT CA
Tải trực tiếp các file trong thư mục [`dns/`](./dns) về iPhone để cài đặt hồ sơ:
- **DNS Locket 60s:** [`dns/locket60s.mobileconfig`](./dns/locket60s.mobileconfig)
- **DNS Locket Gold:** [`dns/locketgold.mobileconfig`](./dns/locketgold.mobileconfig)
- **Chứng chỉ Root CA:** [`dns/rootca.mobileconfig`](./dns/rootca.mobileconfig)

> 🔒 **Cơ chế chống trôi Gold:** Sau khi dùng Shadowrocket kích hoạt Gold lần đầu thành công, cài hồ sơ DNS này lên iPhone rồi tắt hẳn VPN Shadowrocket. DNS sẽ chặn request ngầm tới RevenueCat, giúp Locket giữ vĩnh viễn Gold từ bộ nhớ máy mà không lo tốn pin hay nóng máy!

---

## 📖 3. HƯỚNG DẪN CÀI ĐẶT NHANH TRÊN SHADOWROCKET

1. **Thêm Cấu Hình / Module:**
   - Với file `.config`: Mở **Shadowrocket** $\rightarrow$ Tab **Cấu hình (Config)** $\rightarrow$ Bấm dấu **`+`** góc trên bên phải $\rightarrow$ Dán URL `.config` vào $\rightarrow$ Bấm **Tải về**.
   - Với file `.sgmodule`: Mở **Shadowrocket** $\rightarrow$ Tab **Cấu hình (Config)** $\rightarrow$ Mục **Module** $\rightarrow$ Bấm dấu **`+`** $\rightarrow$ Dán URL `.sgmodule` vào $\rightarrow$ Bấm **Đồng ý**.
2. **Bật Giải Mã HTTPS (MITM):**
   - Trong tab **Cấu hình**, bấm vào biểu tượng chữ **`(i)`** bên cạnh file cấu hình đang dùng $\rightarrow$ Chọn **Giải mã HTTPS (HTTPS Decryption)** $\rightarrow$ Bật công tắc lên.
3. **Tạo & Tin Cậy Chứng Chỉ CA:**
   - Chọn **Tạo chứng chỉ CA mới** $\rightarrow$ **Cài đặt chứng chỉ** vào hệ thống.
   - Vào **Cài đặt (iPhone)** $\rightarrow$ **Đã tải về hồ sơ** (hoặc *Cài đặt chung $\rightarrow$ Quản lý VPN & Thiết bị*) $\rightarrow$ Cài đặt chứng chỉ Shadowrocket.
   - Vào **Cài đặt chung** $\rightarrow$ **Giới thiệu** $\rightarrow$ Kéo xuống cuối chọn **Cài đặt tin cậy chứng nhận** $\rightarrow$ Bật xanh chứng chỉ **Shadowrocket**.
4. **Kích Hoạt:**
   - Quay lại ứng dụng **Shadowrocket**, bật kết nối VPN và mở ứng dụng **Locket** để sử dụng!

---

## 🎨 4. TÙY CHỈNH CAPTION & KHUNG VIỀN WIDGET TRÊN WEB
Truy cập giao diện web (`index.html`) để:
- Tự do chọn các **Preset Caption hot nhất** (Dỗi rồi 😤, Đang bận tương tư 💭, Rep tin nhắn đi 📩, Hảo hán 🗡️, Cảm lạnh 🤧,...).
- Tùy chỉnh màu sắc, gradient, icon cho khung Caption hoặc khung viền Widget màn hình chính và tải file `.sgmodule` cá nhân về máy hoàn toàn miễn phí.

---

## 🛠️ 5. CÔNG CỤ CHẨN ĐOÁN LOG THIẾT BỊ QUA CỔNG USB (`capture_locket.py`)
Khi gặp tình trạng Shadowrocket không bắt được gói tin hoặc Locket không lên Gold:
1. Cài đặt thư viện: `pip install tidevice`
2. Cắm iPhone vào máy tính qua cáp USB và mở terminal chạy:
   ```bash
   python capture_locket.py
   ```
3. Mở app Locket trên điện thoại. Script sẽ đọc luồng syslog thực tế từ iPhone để báo ngay lập tức lỗi bắt tay SSL, trạng thái MITM hoặc cờ phản hồi của RevenueCat.
