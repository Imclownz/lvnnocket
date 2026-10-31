# 🚀 LOCKET 60S & GOLD + SHADOWROCKET CONFIGS (MÃ NGUỒN MỞ MIỄN PHÍ)

> Bộ cấu hình (`.conf` / `.config`) và Module (`.sgmodule`) mở khóa **Locket Gold**, **Quay Video Locket 60s**, **Tải Video 60s Từ Thư Viện (Camera Roll)**, **8+ Presets Captions Độc Quyền**, **Khung Viền Widget**, **YouTube Premium** và **Spotify Premium** trên iOS qua ứng dụng **Shadowrocket**.
> **Đã tích hợp công nghệ Anti-QUIC (UDP 443), Anti-Revoke chứng chỉ Apple, chặn rò rỉ Apple Relay (tương thích hoàn hảo iOS 15 - 18).**

---

## 🔗 1. DANH SÁCH URL CẤU HÌNH (CHỈ CẦN COPY & DÁN VÀO SHADOWROCKET)

### 👑 Cấu hình Toàn Diện lvnnocket.conf (Locket Gold & 60s + 8+ Captions + YouTube + Spotify)
*Đây là file cấu hình độc lập đầy đủ nhất, tích hợp General, Rules, Anti-Revoke, Anti-QUIC, YouTube Premium, Spotify VIP và toàn bộ tính năng Locket:*
```text
https://raw.githubusercontent.com/Imclownz/lvnnocket/master/lvnnocket.conf
```

### 💛 Cấu hình Locket Chuyên Sâu locket.conf (Chỉ Locket Gold & 60s + 8+ Captions)
*Dành riêng cho bạn nào chỉ muốn tối ưu cho Locket mà không cần động chạm ứng dụng khác:*
```text
https://raw.githubusercontent.com/Imclownz/lvnnocket/master/locket.conf
```

### 🌟 Module Locket 60s & Gold VIP (Khuyên dùng khi add dạng Module)
Mở khóa Locket Gold vĩnh viễn + Quay & đăng video 60 giây (kể cả từ Cuộn Camera) + Khung Caption & Widget:
```text
https://raw.githubusercontent.com/Imclownz/lvnnocket/master/locket60s.sgmodule
```

### 💗 Module Locket 60s (Bản kèm sẵn 8 Caption Preset)
```text
https://raw.githubusercontent.com/Imclownz/lvnnocket/master/locket60sprivate.sgmodule
```

### 🔥 All-In-One Config (Locket Gold + YouTube + Spotify 3 trong 1)
```text
https://raw.githubusercontent.com/Imclownz/lvnnocket/master/allinone.config
```

### ▶️ YouTube Premium Config (Chặn quảng cáo, phát nền & PiP)
```text
https://raw.githubusercontent.com/Imclownz/lvnnocket/master/youtubepremium.config
```

### 🎵 Spotify Premium Config
```text
https://raw.githubusercontent.com/Imclownz/lvnnocket/master/spotify.config
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

1. **Thêm Cấu Hình (`.conf`):**
   - Mở **Shadowrocket** $\rightarrow$ Tab **Cấu hình (Config)** $\rightarrow$ Bấm dấu **`+`** góc trên bên phải $\rightarrow$ Dán URL `lvnnocket.conf` (hoặc `locket.conf`) vào $\rightarrow$ Bấm **Tải về**.
   - Chạm vào cấu hình vừa tải về và chọn **Sử dụng cấu hình**.
2. **Bật Giải Mã HTTPS (MITM):**
   - Trong tab **Cấu hình**, bấm vào biểu tượng chữ **`(i)`** bên cạnh file cấu hình đang dùng $\rightarrow$ Chọn **Giải mã HTTPS (HTTPS Decryption)** $\rightarrow$ Bật công tắc lên.
3. **Tạo & Tin Cậy Chứng Chỉ CA:**
   - Chọn **Tạo chứng chỉ CA mới** $\rightarrow$ **Cài đặt chứng chỉ** vào hệ thống.
   - Vào **Cài đặt (iPhone)** $\rightarrow$ **Đã tải về hồ sơ** (hoặc *Cài đặt chung $\rightarrow$ Quản lý VPN & Thiết bị*) $\rightarrow$ Cài đặt chứng chỉ Shadowrocket.
   - Vào **Cài đặt chung** $\rightarrow$ **Giới thiệu** $\rightarrow$ Kéo xuống cuối chọn **Cài đặt tin cậy chứng nhận** $\rightarrow$ Bật xanh chứng chỉ **Shadowrocket**.
4. **Kích Hoạt:**
   - Quay lại ứng dụng **Shadowrocket**, bật kết nối VPN và mở ứng dụng **Locket** để tận hưởng đầy đủ Gold, 60s và Captions!

---

## 🎨 4. DANH SÁCH CAPTIONS PRESET CÓ SẴN
File cấu hình đã tích hợp sẵn 8 kiểu caption độc quyền xuất hiện ngay trong tab Caption của Locket:
1. 💗 Dễ thương quá nè
2. 💗 Dthw zaaaa💗
3. 💕 iu hămm💕
4. 👑 Locket 60s by lvn
5. 👑 Xinh đẹp tuyệt vời💗
6. ✨ Xinh đẹp tuyệt vời💗
7. 🏳️‍🌈 LGBT
8. ✨ Ngon hămm

---

## 🛠️ 5. CÔNG CỤ CHẨN ĐOÁN LOG THIẾT BỊ QUA CỔNG USB (`capture_locket.py`)
Khi gặp tình trạng Shadowrocket không bắt được gói tin hoặc Locket không lên Gold:
1. Cài đặt thư viện: `pip install tidevice`
2. Cắm iPhone vào máy tính qua cáp USB và mở terminal chạy:
   ```bash
   python capture_locket.py
   ```
3. Mở app Locket trên điện thoại. Script sẽ đọc luồng syslog thực tế từ iPhone để báo ngay lập tức lỗi bắt tay SSL, trạng thái MITM hoặc cờ phản hồi của RevenueCat.
