#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
====================================================================
🛠️ LOCKET MITM & SSL LOG INSPECTOR (USB TIDEVICE)
====================================================================
Công cụ quét log thời gian thực trực tiếp từ iPhone qua cổng USB.
Giúp kiểm tra kết nối Shadowrocket, bắt tay SSL, RevenueCat & Firebase RemoteConfig.

Yêu cầu:
  pip install tidevice
Cách dùng:
  1. Cắm iPhone vào máy tính qua cáp USB (Bấm "Tin cậy máy tính này" trên iPhone).
  2. Chạy: python capture_locket.py
  3. Mở ứng dụng Locket trên iPhone trong vòng 15 giây.
====================================================================
"""

import sys
import time

try:
    import tidevice
except ImportError:
    print("[!] Chưa cài đặt thư viện 'tidevice'. Hãy chạy lệnh sau:")
    print("    pip install tidevice")
    sys.exit(1)

def main():
    print("=" * 65)
    print("🚀 ĐANG TÌM KIẾM THIẾT BỊ IPHONE QUA CỔNG USB...")
    print("=" * 65)

    try:
        d = tidevice.Device()
    except Exception as e:
        print(f"[!] Không tìm thấy thiết bị iPhone nào cắm qua USB: {e}")
        print("👉 Vui lòng cắm cáp USB và bấm 'Tin cậy máy tính này' trên màn hình iPhone.")
        sys.exit(1)

    print(f"[*] ✅ Đã kết nối iPhone: {d.name} (iOS {d.product_version} - Model: {d.model})")
    print("[*] 📡 Đang khởi động luồng nhật ký hệ thống (syslog_relay)...")

    try:
        s = d.start_service("com.apple.syslog_relay")
    except Exception as e:
        print(f"[!] Lỗi kết nối dịch vụ syslog: {e}")
        sys.exit(1)

    SCAN_SECONDS = 15
    print(f"[*] ⏳ Đang lắng nghe log mạng trong {SCAN_SECONDS} giây...")
    print("👉 HÃY MỞ APP LOCKET TRÊN IPHONE NGAY BÂY GIỜ!\n")

    start_time = time.time()
    matching_lines = []
    all_locket_lines = []
    target_keywords = [
        'revenuecat', 'firebase', 'remoteconfig', 'shadowrocket',
        'mitm', 'script', 'ssl error', 'handshake', 'locket_1600',
        'postmoment', 'entitlement', 'subscribers'
    ]

    while time.time() - start_time < SCAN_SECONDS:
        try:
            raw = s.psock.recv().decode('utf-8', errors='ignore')
            if not raw:
                continue
            for line in raw.split('\n'):
                line_str = line.strip()
                if not line_str:
                    continue
                lower = line_str.lower()
                if 'locket' in lower:
                    all_locket_lines.append(line_str)
                if any(k in lower for k in target_keywords):
                    matching_lines.append(line_str)
        except Exception as e:
            print("[!] Lỗi đọc stream nhật ký:", e)
            break

    print("\n" + "=" * 65)
    print("📊 KẾT QUẢ QUÉT LOG MẠNG LOCKET")
    print("=" * 65)
    print(f"• Tổng số sự kiện Locket ghi nhận: {len(all_locket_lines)}")
    print(f"• Tổng số sự kiện can thiệp mạng (RevenueCat/Firebase/MITM): {len(matching_lines)}")

    if matching_lines:
        print("\n--- 🔍 CHI TIẾT CÁC LOG MẠNG QUAN TRỌNG: ---")
        for idx, l in enumerate(matching_lines[:40], 1):
            print(f"[{idx:02d}] {l}")
        print("\n[✓] Hệ thống đã phát hiện luồng mạng của Locket. Cấu hình Shadowrocket đang hoạt động bình thường!")
    elif all_locket_lines:
        print("\n--- ⚠️ CÁC LOG LOCKET GHI NHẬN (CHƯA THẤY EVENT MITM): ---")
        for idx, l in enumerate(all_locket_lines[:25], 1):
            print(f"[{idx:02d}] {l}")
        print("\n[!] Locket có khởi động nhưng chưa thấy request đi qua RevenueCat.")
        print("👉 Hãy kiểm tra: 1) Đã bật VPN Shadowrocket chưa? 2) Đã bật HTTPS Decryption (MITM) và tin cậy chứng chỉ CA chưa?")
    else:
        print("\n[!] Không phát hiện log Locket trong thời gian quét.")
        print("👉 Hãy đảm bảo bạn đã mở ứng dụng Locket trong khi script đang chạy.")

    print("=" * 65)

if __name__ == '__main__':
    main()

