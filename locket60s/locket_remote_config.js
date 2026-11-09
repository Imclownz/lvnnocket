/**
 * Locket Gold Remote Config Rewrite - lvn & spinach
 * Matches: firebaseremoteconfig.googleapis.com
 * Features: 16 Khung Photobooth 4 Ô + 8 Nhãn dán & Khung đơn + 6 Bộ lọc AI Nghệ thuật (100% Free Render),
 *           Quay & Up Video 45s, Full Captions/Ghi chú, Gỡ bỏ hoàn toàn Paywall Lịch sử.
 */

(function() {
  var body = ($response && $response.body) ? $response.body : null;
  var obj = {};
  if (body) {
    try {
      obj = JSON.parse(body);
    } catch(e) {
      obj = {};
    }
  }
  if (!obj || typeof obj !== "object") {
    obj = {};
  }

  obj.Attention = "Kích hoạt Locket Gold VIP Photobooth vĩnh viễn thành công bởi lvn & spinach!";
  obj.state = obj.state || "UPDATE";
  obj.templateVersion = obj.templateVersion || "9999999999";
  obj.entries = obj.entries || {};
  var originalEntries = Object.assign({}, obj.entries);

  var MY_DURATION = 45.0;
  var durationStr = "45.0";

  // 1. Cấu hình Camera & Camera Roll: Quay và tải lên Video 45s chuẩn tự nhiên + Hiển thị nút Bộ lọc
  var cameraConfig = {
    flashButton: true,
    flash_button: true,
    filterButton: true,
    filter_button: true,
    showFilterButton: true,
    show_filter_button: true,
    gold_max_duration: MY_DURATION,
    goldMaxDuration: MY_DURATION,
    max_duration: MY_DURATION,
    maxDuration: MY_DURATION,
    lanczos: true,
    ultraWide: true,
    ultra_wide: true,
    volume_button: true,
    telephoto: true,
    aspectRatio: "5:7",
    aspect_ratio: "5:7",
    high_quality: true
  };

  var cameraRollConfig = {
    flashButton: true,
    flash_button: true,
    lanczos: true,
    high_quality: true,
    gold_max_duration: MY_DURATION,
    goldMaxDuration: MY_DURATION,
    video_max_duration: MY_DURATION,
    videoMaxDuration: MY_DURATION,
    max_duration: MY_DURATION,
    maxDuration: MY_DURATION,
    trim_max_duration: MY_DURATION,
    trimMaxDuration: MY_DURATION,
    camera_roll_max_duration: MY_DURATION,
    camera_roll_video_max_duration: MY_DURATION,
    max_file_size: 104857600,
    max_upload_bytes: 104857600
  };

  obj.entries.camera = JSON.stringify(cameraConfig);
  obj.entries.camera_roll = JSON.stringify(cameraRollConfig);

  Object.assign(obj.entries, {
    allow_video_upload: "true",
    camera_roll_enabled: "true",
    camera_roll_preview_enabled: "true",
    camera_roll_video: "true",
    camera_roll_video_enabled: "true",
    camera_roll_video_upload_enabled: "true",
    internal_camera_roll_video_upload_enabled: "true",
    longer_camera_roll_videos_enabled: "true",
    can_record_15s_video: "true",
    can_record_30s_video: "true",
    can_record_longer_video: "true",
    can_record_video: "true",
    enable_15s_video: "true",
    enable_30s_video: "true",
    enable_camera_roll: "true",
    enable_longer_video: "true",
    enable_video: "true",
    enable_video_recording: "true",
    extended_video_enabled: "true",
    is_longer_video_enabled: "true",
    longer_video_enabled: "true",
    longer_videos_enabled: "true",
    video_15s_enabled: "true",
    video_30s_enabled: "true",
    video_enabled: "true",
    video_recording_enabled: "true",
    video_upload: "true",
    camera_roll_video_max_duration: durationStr,
    camera_roll_max_duration: durationStr,
    camera_roll_duration: durationStr,
    max_video_duration: durationStr,
    max_video_length: durationStr,
    max_video_seconds: durationStr,
    video_duration: durationStr,
    video_duration_seconds: durationStr,
    video_length: durationStr,
    video_length_seconds: durationStr,
    video_max_duration: durationStr,
    video_trim_max_duration: durationStr,
    trim_max_duration: durationStr,
    gold_max_duration: durationStr,
    video_sound: "true",
    video_sound_enabled: "true",
    microphone_enabled: "true",
    camera_microphone_enabled: "true",
    camera_try_again_button_enabled: "true",
    camera_volume_button_enabled: "true"
  });

  // 2. Danh sách 30 Bộ lọc & Khung Photobooth hoạt động 100% Free Render
  var verifiedFilters = [
    {
        "uid": "khung_nh_hello_kitty_pastel_retro",
        "id": "khung_nh_hello_kitty_pastel_retro",
        "name": "Khung Hello Kitty Pastel",
        "category": "Khung & Photobooth 📸",
        "prompt": "Khung Hello Kitty Pastel cute frame",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_hello_kitty_pastel_retro.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_hello_kitty_pastel_retro.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_hello_kitty_pastel_retro.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_hello_kitty_pastel_retro.png",
        "tintColor": "#FF758C",
        "colors": [
            "#FF758C",
            "#FF7EB3"
        ],
        "captureButtonColors": [
            "#FF758C",
            "#FF7EB3"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_hello_kitty_pastel_retro.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_hello_kitty_pastel_retro.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_hello_kitty_pastel_retro.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "photobooth",
        "is_photobooth": true,
        "photobooth_template_id": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0,
        "productUrl": null
    },
    {
        "uid": "khung_v_ng_b_n_n_t_ch_p_tr_n",
        "id": "khung_v_ng_b_n_n_t_ch_p_tr_n",
        "name": "Locket Việt Nam",
        "category": "Khung & Photobooth 📸",
        "prompt": "Locket Việt Nam cute frame",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_v_ng_b_n_n_t_ch_p_tr_n.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_v_ng_b_n_n_t_ch_p_tr_n.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_v_ng_b_n_n_t_ch_p_tr_n.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_v_ng_b_n_n_t_ch_p_tr_n.png",
        "tintColor": "#f7bb07",
        "colors": [
            "#f7bb07",
            "#fad550"
        ],
        "captureButtonColors": [
            "#f7bb07",
            "#fad550"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_v_ng_b_n_n_t_ch_p_tr_n.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_v_ng_b_n_n_t_ch_p_tr_n.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_v_ng_b_n_n_t_ch_p_tr_n.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "photobooth",
        "is_photobooth": true,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "khung_photobooth_b_n_sao_tr_ng_trong_su_t",
        "id": "khung_photobooth_b_n_sao_tr_ng_trong_su_t",
        "name": "Sao lấp lánh",
        "category": "Khung & Photobooth 📸",
        "prompt": "Sao lấp lánh cute frame",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_b_n_sao_tr_ng_trong_su_t.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_b_n_sao_tr_ng_trong_su_t.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_b_n_sao_tr_ng_trong_su_t.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_b_n_sao_tr_ng_trong_su_t.png",
        "tintColor": "#000000",
        "colors": [
            "#000000",
            "#ffffff"
        ],
        "captureButtonColors": [
            "#000000",
            "#ffffff"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_b_n_sao_tr_ng_trong_su_t.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_b_n_sao_tr_ng_trong_su_t.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_b_n_sao_tr_ng_trong_su_t.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "photobooth",
        "is_photobooth": true,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 106,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "khung_photobooth_kh_ng_long_v_ng",
        "id": "khung_photobooth_kh_ng_long_v_ng",
        "name": "Khủng long vàng",
        "category": "Khung & Photobooth 📸",
        "prompt": "Khủng long vàng cute frame",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_kh_ng_long_v_ng.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_kh_ng_long_v_ng.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_kh_ng_long_v_ng.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_kh_ng_long_v_ng.png",
        "tintColor": "#61ab4f",
        "colors": [
            "#61ab4f",
            "#fabb00"
        ],
        "captureButtonColors": [
            "#61ab4f",
            "#fabb00"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_kh_ng_long_v_ng.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_kh_ng_long_v_ng.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_kh_ng_long_v_ng.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "photobooth",
        "is_photobooth": true,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "khung_photobooth_pastel_b_n_nh",
        "id": "khung_photobooth_pastel_b_n_nh",
        "name": "Công chúa",
        "category": "Khung & Photobooth 📸",
        "prompt": "Công chúa cute frame",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_pastel_b_n_nh.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_pastel_b_n_nh.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_pastel_b_n_nh.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_pastel_b_n_nh.png",
        "tintColor": "#f7d2e3",
        "colors": [
            "#f7d2e3",
            "#b6ddfa"
        ],
        "captureButtonColors": [
            "#f7d2e3",
            "#b6ddfa"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_pastel_b_n_nh.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_pastel_b_n_nh.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_pastel_b_n_nh.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "photobooth",
        "is_photobooth": true,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "khung_photobooth_vintage_n_u_b_n",
        "id": "khung_photobooth_vintage_n_u_b_n",
        "name": "4 mùa",
        "category": "Khung & Photobooth 📸",
        "prompt": "4 mùa cute frame",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_vintage_n_u_b_n.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_vintage_n_u_b_n.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_vintage_n_u_b_n.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_vintage_n_u_b_n.png",
        "tintColor": "#331c12",
        "colors": [
            "#331c12",
            "#c9b49f"
        ],
        "captureButtonColors": [
            "#331c12",
            "#c9b49f"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_vintage_n_u_b_n.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_vintage_n_u_b_n.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_vintage_n_u_b_n.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "photobooth",
        "is_photobooth": true,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "photobooth_denim_b_n_trong_su_t",
        "id": "photobooth_denim_b_n_trong_su_t",
        "name": "Xanh đại dương",
        "category": "Khung & Photobooth 📸",
        "prompt": "Xanh đại dương cute frame",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_denim_b_n_trong_su_t.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_denim_b_n_trong_su_t.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_denim_b_n_trong_su_t.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_denim_b_n_trong_su_t.png",
        "tintColor": "#FF758C",
        "colors": [
            "#FF758C",
            "#4475ad"
        ],
        "captureButtonColors": [
            "#FF758C",
            "#4475ad"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_denim_b_n_trong_su_t.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_denim_b_n_trong_su_t.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_denim_b_n_trong_su_t.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "photobooth",
        "is_photobooth": true,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "scrapbook_du_l_ch_vintage_b_n_nh",
        "id": "scrapbook_du_l_ch_vintage_b_n_nh",
        "name": "Scrapbook du lịch",
        "category": "Khung & Photobooth 📸",
        "prompt": "Scrapbook du lịch cute frame",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/scrapbook_du_l_ch_vintage_b_n_nh.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/scrapbook_du_l_ch_vintage_b_n_nh.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/scrapbook_du_l_ch_vintage_b_n_nh.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/scrapbook_du_l_ch_vintage_b_n_nh.png",
        "tintColor": "#a31015",
        "colors": [
            "#a31015",
            "#f2d5ac"
        ],
        "captureButtonColors": [
            "#a31015",
            "#f2d5ac"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/scrapbook_du_l_ch_vintage_b_n_nh.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/scrapbook_du_l_ch_vintage_b_n_nh.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/scrapbook_du_l_ch_vintage_b_n_nh.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "photobooth",
        "is_photobooth": true,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "khung_nh_hello_kitty_b_n",
        "id": "khung_nh_hello_kitty_b_n",
        "name": "Vịt tốt nghiệp",
        "category": "Khung & Photobooth 📸",
        "prompt": "Vịt tốt nghiệp cute frame",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_hello_kitty_b_n.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_hello_kitty_b_n.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_hello_kitty_b_n.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_hello_kitty_b_n.png",
        "tintColor": "#138ec3",
        "colors": [
            "#138ec3",
            "#dca3ba"
        ],
        "captureButtonColors": [
            "#138ec3",
            "#dca3ba"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_hello_kitty_b_n.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_hello_kitty_b_n.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_hello_kitty_b_n.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "photobooth",
        "is_photobooth": true,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 107,
        "offset_x": 1,
        "offset_y": -1
    },
    {
        "uid": "khung_photobooth_c_n_con_ti_m_b_nh",
        "id": "khung_photobooth_c_n_con_ti_m_b_nh",
        "name": "cún con tiệm bánh",
        "category": "Khung & Photobooth 📸",
        "prompt": "cún con tiệm bánh cute frame",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_c_n_con_ti_m_b_nh.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_c_n_con_ti_m_b_nh.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_c_n_con_ti_m_b_nh.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_c_n_con_ti_m_b_nh.png",
        "tintColor": "#f7e3b0",
        "colors": [
            "#f7e3b0",
            "#cc965c"
        ],
        "captureButtonColors": [
            "#f7e3b0",
            "#cc965c"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_c_n_con_ti_m_b_nh.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_c_n_con_ti_m_b_nh.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_photobooth_c_n_con_ti_m_b_nh.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "photobooth",
        "is_photobooth": true,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "khung_nh_g_u_pastel_ng_t_ng_o",
        "id": "khung_nh_g_u_pastel_ng_t_ng_o",
        "name": "gấu ngọt ngào",
        "category": "Khung & Photobooth 📸",
        "prompt": "gấu ngọt ngào cute frame",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_g_u_pastel_ng_t_ng_o.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_g_u_pastel_ng_t_ng_o.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_g_u_pastel_ng_t_ng_o.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_g_u_pastel_ng_t_ng_o.png",
        "tintColor": "#FF758C",
        "colors": [
            "#FF758C",
            "#FF7EB3"
        ],
        "captureButtonColors": [
            "#FF758C",
            "#FF7EB3"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_g_u_pastel_ng_t_ng_o.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_g_u_pastel_ng_t_ng_o.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_g_u_pastel_ng_t_ng_o.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "photobooth",
        "is_photobooth": true,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "b_n_tv_h_ng_retro_khung_nh",
        "id": "b_n_tv_h_ng_retro_khung_nh",
        "name": "TV hồng retro",
        "category": "Khung & Photobooth 📸",
        "prompt": "TV hồng retro cute frame",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793979781_71d324.png",
        "iconUrl": "https://firebaseremoteconfig.googleapis.com/assets/stickers/sticker_1793980463_194085.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793979781_71d324.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793979781_71d324.png",
        "tintColor": "#fae3eb",
        "colors": [
            "#fae3eb",
            "#fae3eb"
        ],
        "captureButtonColors": [
            "#fae3eb",
            "#fae3eb"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793979781_71d324.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793979781_71d324.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793979781_71d324.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "photobooth",
        "is_photobooth": true,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "khung_nh_b_n_doodle_pastel",
        "id": "khung_nh_b_n_doodle_pastel",
        "name": "doodle pastel",
        "category": "Khung & Photobooth 📸",
        "prompt": "doodle pastel cute frame",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793979888_1b252e.png",
        "iconUrl": "https://firebaseremoteconfig.googleapis.com/assets/stickers/sticker_1793980549_cf4194.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793979888_1b252e.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793979888_1b252e.png",
        "tintColor": "#99d2f7",
        "colors": [
            "#99d2f7",
            "#FF7EB3"
        ],
        "captureButtonColors": [
            "#99d2f7",
            "#FF7EB3"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793979888_1b252e.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793979888_1b252e.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793979888_1b252e.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "photobooth",
        "is_photobooth": true,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "khung_nh_hello_kitty_2x2_trong_su_t",
        "id": "khung_nh_hello_kitty_2x2_trong_su_t",
        "name": "Khung ảnh Hello Kitty",
        "category": "Khung & Photobooth 📸",
        "prompt": "Khung ảnh Hello Kitty cute frame",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793980059_09e808.png",
        "iconUrl": "https://firebaseremoteconfig.googleapis.com/assets/stickers/sticker_1793980597_097eca.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793980059_09e808.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793980059_09e808.png",
        "tintColor": "#de282b",
        "colors": [
            "#de282b",
            "#080b36"
        ],
        "captureButtonColors": [
            "#de282b",
            "#080b36"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793980059_09e808.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793980059_09e808.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793980059_09e808.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "photobooth",
        "is_photobooth": true,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "khung_nh_shin_chan_h_ng_2x2_trong_su_t",
        "id": "khung_nh_shin_chan_h_ng_2x2_trong_su_t",
        "name": "Shin chan",
        "category": "Khung & Photobooth 📸",
        "prompt": "Shin chan cute frame",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793980142_28f92b.png",
        "iconUrl": "https://firebaseremoteconfig.googleapis.com/assets/stickers/sticker_1793980701_04f799.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793980142_28f92b.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793980142_28f92b.png",
        "tintColor": "#FF758C",
        "colors": [
            "#FF758C",
            "#FF7EB3"
        ],
        "captureButtonColors": [
            "#FF758C",
            "#FF7EB3"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793980142_28f92b.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793980142_28f92b.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793980142_28f92b.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "photobooth",
        "is_photobooth": true,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "khung_hello_kitty_b_n_m_y_vu_ng",
        "id": "khung_hello_kitty_b_n_m_y_vu_ng",
        "name": "Khung Hello Kitty cuti",
        "category": "Khung & Photobooth 📸",
        "prompt": "Khung Hello Kitty cuti cute frame",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793980192_4d8b35.png",
        "iconUrl": "https://firebaseremoteconfig.googleapis.com/assets/stickers/sticker_1793980756_4f91bb.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793980192_4d8b35.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793980192_4d8b35.png",
        "tintColor": "#FF758C",
        "colors": [
            "#FF758C",
            "#FF7EB3"
        ],
        "captureButtonColors": [
            "#FF758C",
            "#FF7EB3"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793980192_4d8b35.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793980192_4d8b35.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/photobooth_1793980192_4d8b35.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "photobooth",
        "is_photobooth": true,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "cmt_locket",
        "id": "cmt_locket",
        "name": "I love Locket",
        "category": "Khung & Photobooth 📸",
        "prompt": "cmt locket cute sticker",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/cmt_locket.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/cmt_locket.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/cmt_locket.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/cmt_locket.png",
        "tintColor": "#ffcd03",
        "colors": [
            "#ffcd03",
            "#ffcd03"
        ],
        "captureButtonColors": [
            "#ffcd03",
            "#ffcd03"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/cmt_locket.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/cmt_locket.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/cmt_locket.png",
            "sfSymbol": "heart.fill",
            "symbol": "heart.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "normal",
        "is_photobooth": false,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 3,
        "offset_y": 6
    },
    {
        "uid": "sticker_b_nh_lu_n_minh_tu",
        "id": "sticker_b_nh_lu_n_minh_tu",
        "name": "TikTok Trend",
        "category": "Khung & Photobooth 📸",
        "prompt": "Sticker bình luận Minh Tuệ cute sticker",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/sticker_b_nh_lu_n_minh_tu.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/sticker_b_nh_lu_n_minh_tu.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/sticker_b_nh_lu_n_minh_tu.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/sticker_b_nh_lu_n_minh_tu.png",
        "tintColor": "#e3a300",
        "colors": [
            "#e3a300",
            "#e3a300"
        ],
        "captureButtonColors": [
            "#e3a300",
            "#e3a300"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/sticker_b_nh_lu_n_minh_tu.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/sticker_b_nh_lu_n_minh_tu.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/sticker_b_nh_lu_n_minh_tu.png",
            "sfSymbol": "heart.fill",
            "symbol": "heart.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "normal",
        "is_photobooth": false,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 1,
        "offset_y": -4
    },
    {
        "uid": "khung_hello_kitty_pastel_ng_t_ng_o",
        "id": "khung_hello_kitty_pastel_ng_t_ng_o",
        "name": "Khung Hello Kitty pastel ngọt ngào",
        "category": "Khung & Photobooth 📸",
        "prompt": "Khung Hello Kitty pastel ngọt ngào cute sticker",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_hello_kitty_pastel_ng_t_ng_o.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_hello_kitty_pastel_ng_t_ng_o.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_hello_kitty_pastel_ng_t_ng_o.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_hello_kitty_pastel_ng_t_ng_o.png",
        "tintColor": "#FF758C",
        "colors": [
            "#FF758C",
            "#FF7EB3"
        ],
        "captureButtonColors": [
            "#FF758C",
            "#FF7EB3"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_hello_kitty_pastel_ng_t_ng_o.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_hello_kitty_pastel_ng_t_ng_o.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_hello_kitty_pastel_ng_t_ng_o.png",
            "sfSymbol": "heart.fill",
            "symbol": "heart.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "normal",
        "is_photobooth": false,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 115,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "khung_nh_vu_ng_m_ng_nh_n_b_c",
        "id": "khung_nh_vu_ng_m_ng_nh_n_b_c",
        "name": "Khung nhện đỏ",
        "category": "Khung & Photobooth 📸",
        "prompt": "Khung ảnh vuông mạng nhện đỏ bạc cute sticker",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_vu_ng_m_ng_nh_n_b_c.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_vu_ng_m_ng_nh_n_b_c.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_vu_ng_m_ng_nh_n_b_c.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_vu_ng_m_ng_nh_n_b_c.png",
        "tintColor": "#fa002a",
        "colors": [
            "#fa002a",
            "#fa002a"
        ],
        "captureButtonColors": [
            "#fa002a",
            "#fa002a"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_vu_ng_m_ng_nh_n_b_c.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_vu_ng_m_ng_nh_n_b_c.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/khung_nh_vu_ng_m_ng_nh_n_b_c.png",
            "sfSymbol": "heart.fill",
            "symbol": "heart.fill",
            "emoji": ""
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": false,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "normal",
        "is_photobooth": false,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 102,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "mieng_rong",
        "id": "mieng_rong",
        "name": "Miệng Rộng Hài Hước 😂",
        "category": "Meme Hài Hước 😂",
        "prompt": "Filter mồm to ngoác miệng hài hước",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/mieng_rong.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/mieng_rong.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/mieng_rong.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/mieng_rong.png",
        "tintColor": "#FFD700",
        "colors": [
            "#FFD700",
            "#FF4500"
        ],
        "captureButtonColors": [
            "#FFD700",
            "#FF4500"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/mieng_rong.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/mieng_rong.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/mieng_rong.png",
            "sfSymbol": "face.smiling.inverse",
            "symbol": "face.smiling.inverse",
            "emoji": "👄"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": true,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "normal",
        "is_photobooth": false,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "thoi_su_vtv",
        "id": "thoi_su_vtv",
        "name": "Thời Sự VTV 📺",
        "category": "Meme Hài Hước 😂",
        "prompt": "Bản tin thời sự VTV đối tượng truy tìm",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/thoi_su_vtv.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/thoi_su_vtv.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/thoi_su_vtv.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/thoi_su_vtv.png",
        "tintColor": "#D32F2F",
        "colors": [
            "#D32F2F",
            "#1976D2"
        ],
        "captureButtonColors": [
            "#D32F2F",
            "#1976D2"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/thoi_su_vtv.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/thoi_su_vtv.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/thoi_su_vtv.png",
            "sfSymbol": "tv.fill",
            "symbol": "tv.fill",
            "emoji": "📺"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": true,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "normal",
        "is_photobooth": false,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "lenh_truy_na",
        "id": "lenh_truy_na",
        "name": "Lệnh Truy Nã 🏴‍☠️",
        "category": "Meme Hài Hước 😂",
        "prompt": "Lệnh truy nã One Piece Wanted",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/lenh_truy_na.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/lenh_truy_na.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/lenh_truy_na.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/lenh_truy_na.png",
        "tintColor": "#5D4037",
        "colors": [
            "#D7CCC8",
            "#5D4037"
        ],
        "captureButtonColors": [
            "#D7CCC8",
            "#5D4037"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/lenh_truy_na.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/lenh_truy_na.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/lenh_truy_na.png",
            "sfSymbol": "doc.text.fill",
            "symbol": "doc.text.fill",
            "emoji": "📜"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": true,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "normal",
        "is_photobooth": false,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "thug_life",
        "id": "thug_life",
        "name": "Thug Life 🕶️",
        "category": "Meme Hài Hước 😂",
        "prompt": "Kính râm điếu thuốc Thug Life",
        "style": "cutout",
        "overlay": true,
        "imageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/thug_life.png",
        "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/thug_life.png",
        "overlayImageUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/thug_life.png",
        "overlayImageURL": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/thug_life.png",
        "tintColor": "#212121",
        "colors": [
            "#212121",
            "#FFD700"
        ],
        "captureButtonColors": [
            "#212121",
            "#FFD700"
        ],
        "icon": {
            "url": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/thug_life.png",
            "iconUrl": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/thug_life.png",
            "remoteImage": "https://cdn.jsdelivr.net/gh/Imclownz/lvnnocket@master/assets/frames/thug_life.png",
            "sfSymbol": "sunglasses.fill",
            "symbol": "sunglasses.fill",
            "emoji": "🕶️"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": true,
        "filterType": "cutout",
        "type": "normal",
        "filter_type": "normal",
        "is_photobooth": false,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "glamour",
        "id": "glamour",
        "name": "Glamour Studio 💄",
        "category": "Locket AI Nghệ Thuật ✨",
        "prompt": "Soft beauty lighting",
        "style": "legacy",
        "overlay": false,
        "imageUrl": "https://cdn.locket-dio.com/v1/filter_icons/princess.png",
        "iconUrl": "https://cdn.locket-dio.com/v1/filter_icons/princess.png",
        "overlayImageUrl": null,
        "overlayImageURL": null,
        "tintColor": "#FF69B4",
        "colors": [
            "#FF69B4",
            "#FF1493"
        ],
        "captureButtonColors": [
            "#FF69B4",
            "#FF1493"
        ],
        "icon": {
            "url": "https://cdn.locket-dio.com/v1/filter_icons/princess.png",
            "iconUrl": "https://cdn.locket-dio.com/v1/filter_icons/princess.png",
            "remoteImage": "https://cdn.locket-dio.com/v1/filter_icons/princess.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": true,
        "filterType": "style",
        "type": "normal",
        "filter_type": "normal",
        "is_photobooth": false,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "vintage",
        "id": "vintage",
        "name": "Vintage Kodak 90s 🎞️",
        "category": "Locket AI Nghệ Thuật ✨",
        "prompt": "Warm 90s kodak film tone",
        "style": "legacy",
        "overlay": false,
        "imageUrl": "https://cdn.locket-dio.com/v1/filter_icons/bob.png",
        "iconUrl": "https://cdn.locket-dio.com/v1/filter_icons/bob.png",
        "overlayImageUrl": null,
        "overlayImageURL": null,
        "tintColor": "#E67E22",
        "colors": [
            "#E67E22",
            "#D35400"
        ],
        "captureButtonColors": [
            "#E67E22",
            "#D35400"
        ],
        "icon": {
            "url": "https://cdn.locket-dio.com/v1/filter_icons/bob.png",
            "iconUrl": "https://cdn.locket-dio.com/v1/filter_icons/bob.png",
            "remoteImage": "https://cdn.locket-dio.com/v1/filter_icons/bob.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": true,
        "filterType": "style",
        "type": "normal",
        "filter_type": "normal",
        "is_photobooth": false,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "golden_hour",
        "id": "golden_hour",
        "name": "Golden Hour Sunset 🌅",
        "category": "Locket AI Nghệ Thuật ✨",
        "prompt": "Warm sunset sunlight glow",
        "style": "legacy",
        "overlay": false,
        "imageUrl": "https://cdn.locket-dio.com/v1/filter_icons/silver_fox.png",
        "iconUrl": "https://cdn.locket-dio.com/v1/filter_icons/silver_fox.png",
        "overlayImageUrl": null,
        "overlayImageURL": null,
        "tintColor": "#F39C12",
        "colors": [
            "#F39C12",
            "#F1C40F"
        ],
        "captureButtonColors": [
            "#F39C12",
            "#F1C40F"
        ],
        "icon": {
            "url": "https://cdn.locket-dio.com/v1/filter_icons/silver_fox.png",
            "iconUrl": "https://cdn.locket-dio.com/v1/filter_icons/silver_fox.png",
            "remoteImage": "https://cdn.locket-dio.com/v1/filter_icons/silver_fox.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": true,
        "filterType": "style",
        "type": "normal",
        "filter_type": "normal",
        "is_photobooth": false,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "y2k",
        "id": "y2k",
        "name": "Y2K Digital Cam 📸",
        "category": "Locket AI Nghệ Thuật ✨",
        "prompt": "Early 2000s compact flash aesthetic",
        "style": "legacy",
        "overlay": false,
        "imageUrl": "https://cdn.locket-dio.com/v1/filter_icons/bleached_hair.png",
        "iconUrl": "https://cdn.locket-dio.com/v1/filter_icons/bleached_hair.png",
        "overlayImageUrl": null,
        "overlayImageURL": null,
        "tintColor": "#3498DB",
        "colors": [
            "#3498DB",
            "#2980B9"
        ],
        "captureButtonColors": [
            "#3498DB",
            "#2980B9"
        ],
        "icon": {
            "url": "https://cdn.locket-dio.com/v1/filter_icons/bleached_hair.png",
            "iconUrl": "https://cdn.locket-dio.com/v1/filter_icons/bleached_hair.png",
            "remoteImage": "https://cdn.locket-dio.com/v1/filter_icons/bleached_hair.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": true,
        "filterType": "style",
        "type": "normal",
        "filter_type": "normal",
        "is_photobooth": false,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "cyberpunk",
        "id": "cyberpunk",
        "name": "Cyberpunk Neon 🌆",
        "category": "Locket AI Nghệ Thuật ✨",
        "prompt": "Neon blue magenta lighting",
        "style": "legacy",
        "overlay": false,
        "imageUrl": "https://cdn.locket-dio.com/v1/filter_icons/mohawk.png",
        "iconUrl": "https://cdn.locket-dio.com/v1/filter_icons/mohawk.png",
        "overlayImageUrl": null,
        "overlayImageURL": null,
        "tintColor": "#9B59B6",
        "colors": [
            "#9B59B6",
            "#8E44AD"
        ],
        "captureButtonColors": [
            "#9B59B6",
            "#8E44AD"
        ],
        "icon": {
            "url": "https://cdn.locket-dio.com/v1/filter_icons/mohawk.png",
            "iconUrl": "https://cdn.locket-dio.com/v1/filter_icons/mohawk.png",
            "remoteImage": "https://cdn.locket-dio.com/v1/filter_icons/mohawk.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": true,
        "filterType": "style",
        "type": "normal",
        "filter_type": "normal",
        "is_photobooth": false,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    },
    {
        "uid": "monochrome",
        "id": "monochrome",
        "name": "Monochrome B&W 🖤",
        "category": "Locket AI Nghệ Thuật ✨",
        "prompt": "High contrast fine art black and white",
        "style": "legacy",
        "overlay": false,
        "imageUrl": "https://cdn.locket-dio.com/v1/filter_icons/bowling_ball.png",
        "iconUrl": "https://cdn.locket-dio.com/v1/filter_icons/bowling_ball.png",
        "overlayImageUrl": null,
        "overlayImageURL": null,
        "tintColor": "#7F8C8D",
        "colors": [
            "#7F8C8D",
            "#2C3E50"
        ],
        "captureButtonColors": [
            "#7F8C8D",
            "#2C3E50"
        ],
        "icon": {
            "url": "https://cdn.locket-dio.com/v1/filter_icons/bowling_ball.png",
            "iconUrl": "https://cdn.locket-dio.com/v1/filter_icons/bowling_ball.png",
            "remoteImage": "https://cdn.locket-dio.com/v1/filter_icons/bowling_ball.png",
            "sfSymbol": "sparkles",
            "symbol": "sparkles",
            "emoji": "✨"
        },
        "outputUrl": null,
        "badge": "AI",
        "is_ai": true,
        "filterType": "style",
        "type": "normal",
        "filter_type": "normal",
        "is_photobooth": false,
        "photobooth_template_id": null,
        "productUrl": null,
        "textColor": "#FFFFFF",
        "referenceImages": [],
        "scale": 100,
        "offset_x": 0,
        "offset_y": 0
    }
];

  obj.entries.ai_filters = JSON.stringify(verifiedFilters);

  var allFilterIds = verifiedFilters.map(function(f) { return f.id; });
  var photoboothIds = allFilterIds.slice(0, 16);
  var stickerAndFrameIds = ["cmt_locket", "sticker_b_nh_lu_n_minh_tu", "khung_hello_kitty_pastel_ng_t_ng_o", "khung_nh_vu_ng_m_ng_nh_n_b_c", "mieng_rong", "thoi_su_vtv", "lenh_truy_na", "thug_life"];
  var studioAiIds = ["glamour", "vintage", "golden_hour", "y2k", "cyberpunk", "monochrome"];

  var sheetCategories = [
    {
      title: { en: "Photobooth 4 Ô ♡", vi: "Photobooth 4 Ô ♡" },
      filter_ids: photoboothIds,
      filterIds: photoboothIds
    },
    {
      title: { en: "Nhãn Dán & Trend Hot 🔥", vi: "Nhãn Dán & Trend Hot 🔥" },
      filter_ids: stickerAndFrameIds,
      filterIds: stickerAndFrameIds
    },
    {
      title: { en: "AI Nghệ Thuật ✨", vi: "AI Nghệ Thuật ✨" },
      filter_ids: studioAiIds,
      filterIds: studioAiIds
    },
    {
      title: { en: "Cute & Hoạt Hình ♡", vi: "Cute & Hoạt Hình ♡" },
      filter_ids: ["khung_nh_hello_kitty_pastel_retro", "khung_hello_kitty_pastel_ng_t_ng_o", "khung_photobooth_kh_ng_long_v_ng", "khung_photobooth_c_n_con_ti_m_b_nh", "khung_nh_g_u_pastel_ng_t_ng_o", "khung_nh_hello_kitty_2x2_trong_su_t", "khung_nh_shin_chan_h_ng_2x2_trong_su_t", "khung_hello_kitty_b_n_m_y_vu_ng"],
      filterIds: ["khung_nh_hello_kitty_pastel_retro", "khung_hello_kitty_pastel_ng_t_ng_o", "khung_photobooth_kh_ng_long_v_ng", "khung_photobooth_c_n_con_ti_m_b_nh", "khung_nh_g_u_pastel_ng_t_ng_o", "khung_nh_hello_kitty_2x2_trong_su_t", "khung_nh_shin_chan_h_ng_2x2_trong_su_t", "khung_hello_kitty_b_n_m_y_vu_ng"]
    },
    {
      title: { en: "Vintage & Retro ♡", vi: "Vintage & Retro ♡" },
      filter_ids: ["khung_v_ng_b_n_n_t_ch_p_tr_n", "khung_photobooth_vintage_n_u_b_n", "photobooth_denim_b_n_trong_su_t", "scrapbook_du_l_ch_vintage_b_n_nh", "b_n_tv_h_ng_retro_khung_nh", "khung_nh_b_n_doodle_pastel"],
      filterIds: ["khung_v_ng_b_n_n_t_ch_p_tr_n", "khung_photobooth_vintage_n_u_b_n", "photobooth_denim_b_n_trong_su_t", "scrapbook_du_l_ch_vintage_b_n_nh", "b_n_tv_h_ng_retro_khung_nh", "khung_nh_b_n_doodle_pastel"]
    }
  ];

  var filterConfigObj = {
    promo: null,
    packUpsell: null,
    allows_custom_filters: true,
    allowsCustomFilters: true,
    referenceImageAttachmentEnabled: true,
    reference_image_attachment_enabled: true,
    show_filter_button: true,
    showFilterButton: true,
    sheet_enabled: true,
    sheetEnabled: true,
    open_sheet_immediately: false,
    openSheetImmediately: false,
    ai_quota_per_day: 999999,
    allow_unlimited_ai: true,
    picker_filters: allFilterIds,
    pickerFilters: allFilterIds,
    remote_filters: verifiedFilters,
    remoteFilters: verifiedFilters,
    sheet_filters: sheetCategories,
    sheetFilters: sheetCategories
  };

  obj.entries.camera_filter_config = JSON.stringify(filterConfigObj);
  obj.entries.celebrity_camera_filter_config = JSON.stringify({
    celebrityUid: "locket_ai",
    cameraFilterConfig: filterConfigObj
  });

  Object.assign(obj.entries, {
    cameraFilterPromoButton: "true",
    camera_filter: "true",
    camera_filter_enabled: "true",
    camera_filter_fetch_cache_max_age_seconds: "0",
    camera_filter_sheet: "true",
    camera_filter_sheet_enabled: "true",
    camera_filter_storage_bucket: "gs://locket-filters",
    camera_filters: "true",
    camera_filters_enabled: "true",
    enable_camera_filter: "true",
    showFilterButton: "true",
    show_filter_button: "true",
    shop_filter_config: JSON.stringify({ showShopButton: true, filters: [] })
  });

  // 3. Mở khóa toàn diện Locket Gold VIP & GỠ HOÀN TOÀN PAYWALL LỊCH SỬ / HIỆU ỨNG NGÀY LỄ
  Object.assign(obj.entries, {
    is_gold: "true",
    is_gold_user: "true",
    gold_enabled: "true",
    locket_gold_enabled: "true",
    gold_camera_themes: "true",
    gold_camera_themes_profile_menu: "true",
    camera_theme: "true",
    camera_theme_enabled: "true",
    camera_themes_enabled: "true",
    gold_custom_app_icons: "true",
    gold_custom_app_icons_profile_menu: "true",
    reset_non_gold_app_icon_enabled: "false",
    locket_views: "true",
    locket_views_enabled: "true",
    moment_views_enabled: "true",
    moment_views_v2: "true",
    enable_viewer_mode: "true",
    viewer_mode: "true",
    viewer_mode_enabled: "true",
    calendar_delete_moment_enabled: "true",
    calendar_rewind_enabled: "true",
    history_ads_mode: "off",
    history_ad_slot_config: JSON.stringify({
      appearance_probability: 0,
      uid: "none",
      show_first_probability: 0,
      first_slot_position: 999,
      interval: 999
    }),
    history_gold_upsell_design_variants: "[]",
    history_gold_upsell_slot_config: JSON.stringify({
      appearance_probability: 0,
      uid: "none",
      show_first_probability: 0,
      first_slot_position: 999,
      interval: 999
    }),
    paywall_presentation_config: JSON.stringify({
      uid: "v1_no_popup",
      onboarding: false,
      after_sent_moment: false,
      on_foreground: false,
      interval: 2592000,
      profile_banner: false
    }),
    android_subscribe_gold_button_enabled: "false",
    sentry_sample_rate: "0",
    ai_generation_enabled: "true",
    ai_filters_enabled: "true",
    ai_daily_limit: "999999",
    generative_filters_enabled: "true",
    streak_recovery_upsell: "false",
    streakRecoveryUpsell: "false",
    streakRecoveryEnabled: "true",
    streakRecoveryVisible: "true",
    streak_recovery_enabled: "true",
    upsell_features: JSON.stringify({
      app_icon_picker: false,
      camera_roll: false,
      camera_theme: false,
      locket_views: false,
      remove_ads: false,
      custom_widget_frames: false,
      groups: false,
      private_mode: false,
      camera_filter_sheet: false,
      camera_filters: false,
      camera_filter: false,
      ai_filters: false,
      profile_badge: false,
      streak_recovery: false,
      streaks: false,
      streak: false
    }),
    upsell_features_override: JSON.stringify({
      app_icon_picker: false,
      camera_roll: false,
      camera_theme: false,
      locket_views: false,
      remove_ads: false,
      custom_widget_frames: false,
      groups: false,
      private_mode: false,
      camera_filter_sheet: false,
      camera_filters: false,
      camera_filter: false,
      ai_filters: false,
      profile_badge: false,
      streak_recovery: false,
      streaks: false,
      streak: false
    })
  });

  // 4. Kích hoạt FULL Ghi chú & Captions (Poll, Âm nhạc, Thời tiết, Cung hoàng đạo...)
  Object.assign(obj.entries, {
    captions_enabled: "true",
    music_caption_enabled: "true",
    music_captions_enabled: "true",
    music_caption_opened_song: "true",
    music_caption_song_preview_enabled: "true",
    song_preview_enabled: "true",
    music_preview_enabled: "true",
    allow_song_previews: "true",
    spotify_preview_enabled: "true",
    apple_music_preview_enabled: "true",
    poll_caption: "true",
    poll_caption_enabled: "true",
    weather_caption_enabled: "true",
    location_caption_enabled: "true",
    send_custom_location_caption_icon: "true",
    star_sign_background: "true",
    breaking_news_caption_enabled: "true",
    battery_caption_enabled: "true",
    battery_caption: "true",
    speed_caption_enabled: "true",
    speed_caption: "true",
    altitude_caption_enabled: "true",
    altitude_caption: "true",
    color_palette_caption_enabled: "true",
    color_palette_icon: "true",
    streak_caption_enabled: "true",
    time_caption_enabled: "true",
    review_caption_enabled: "true",
    link_caption_link_enabled: "true",
    overlay_navigator_enabled: "true",
    overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
    overlay_dynamic_captions: JSON.stringify([
      "standard", "poll", "color_palette", "review", "music", "location", "weather",
      "time", "streak", "star_sign", "party_time", "locket_count", "good_morning",
      "goodnight", "ootd", "miss_you", "custom", "halloween_2026", "phunu_2010"
    ])
  });

  // 5. Bảo toàn 100% Ghi chú & Caption gốc của Locket, bổ sung bộ Caption VIP lên trên cùng
  try {
    var groups = [];
    try {
      groups = JSON.parse(originalEntries.overlay_items || "[]");
      if (!Array.isArray(groups)) groups = [];
    } catch(e) { groups = []; }

    var vipSection = {
      section: "👑 Locket Gold VIP Captions",
      items: [
        { overlay_id: "caption:lvn_gold_vip", source: "remote", caption: { type: "static_content", text: "👑 Locket Gold VIP", text_color: "#000000", background: { colors: ["#FC466B", "#FCA311", "#FFDD00"] }, localized_text: { vn: "👑 Locket Gold VIP", en: "👑 Locket Gold VIP" } } },
        { overlay_id: "caption:lvn_love_vo", source: "remote", caption: { type: "static_content", text: "💖 Anh iu vợ lúmmm", text_color: "#FFFFFF", background: { colors: ["#FFAFCC", "#FFC8DD", "#CDB4DB"] }, localized_text: { vn: "💖 Anh iu vợ lúmmm", en: "💖 Anh iu vợ lúmmm" } } },
        { overlay_id: "caption:lvn_cute_qua", source: "remote", caption: { type: "static_content", text: "✨ Dễ thương quá nè", text_color: "#8C315F", background: { colors: ["#FAD0C4", "#FFD1FF"] }, localized_text: { vn: "✨ Dễ thương quá nè", en: "✨ Dễ thương quá nè" } } },
        { overlay_id: "caption:lvn_tuong_tu", source: "remote", caption: { type: "static_content", text: "💭 Đang bận tương tư", text_color: "#FFFFFF", background: { colors: ["#1A2980", "#26D0CE"] }, localized_text: { vn: "💭 Đang bận tương tư", en: "💭 Đang bận tương tư" } } },
        { overlay_id: "caption:lvn_flex_tho", source: "remote", caption: { type: "static_content", text: "💎 Flex đến hơi thở cuối", text_color: "#000000", background: { colors: ["#F7971E", "#FFD200"] }, localized_text: { vn: "💎 Flex đến hơi thở cuối", en: "💎 Flex đến hơi thở cuối" } } },
        { overlay_id: "caption:lvn_oach_xa_lach", source: "remote", caption: { type: "static_content", text: "🥬 Oách xà lách", text_color: "#000000", background: { colors: ["#11998E", "#38EF7D"] }, localized_text: { vn: "🥬 Oách xà lách", en: "🥬 Oách xà lách" } } }
      ]
    };

    groups = groups.filter(function(g){ return g && g.section !== vipSection.section; });
    groups.unshift(vipSection);

    obj.entries.overlay_items = JSON.stringify(groups);
  } catch(e) {
    if (originalEntries.overlay_items) obj.entries.overlay_items = originalEntries.overlay_items;
  }

  // 6. Huy hiệu Gold Profile
  Object.assign(obj.entries, {
    gold_badge_profile_menu: "true",
    gold_since_badge: "true",
    gold_since_badge_enabled: "true",
    locket_gold_badge: "true",
    locket_gold_badge_small: "true",
    profile_badge: "true",
    profile_badge_enabled: "true",
    profile_badge_visible: "true",
    profile_gold_badge: "true"
  });

  var respHeaders = ($response && $response.headers) ? Object.assign({}, $response.headers) : {};
  delete respHeaders["content-length"];
  delete respHeaders["Content-Length"];
  delete respHeaders["content-encoding"];
  delete respHeaders["Content-Encoding"];
  delete respHeaders["transfer-encoding"];
  delete respHeaders["Transfer-Encoding"];
  respHeaders["content-type"] = "application/json; charset=utf-8";
  respHeaders["cache-control"] = "no-cache, no-store, must-revalidate";

  $done({
    status: 200,
    headers: respHeaders,
    body: JSON.stringify(obj)
  });
})();
