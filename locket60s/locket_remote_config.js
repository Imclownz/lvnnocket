/**
 * Locket Gold Remote Config Rewrite - lvn & spinach
 * Matches: firebaseremoteconfig.googleapis.com
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

  obj.Attention = "Kích hoạt Locket Gold VIP Photobooth thành công bởi lvn & spinach!";
  obj.state = obj.state || "UPDATE";
  obj.entries = obj.entries || {};
  var originalEntries = Object.assign({}, obj.entries);

  var MY_DURATION = 45.0;
  var durationStr = "45.0";

  // 1. Cấu hình Camera & Camera Roll: Video 45s chuẩn tự nhiên
  var cameraConfig = {
    gold_max_duration: MY_DURATION,
    goldMaxDuration: MY_DURATION,
    max_duration: MY_DURATION,
    maxDuration: MY_DURATION,
    ultra_wide: true,
    volume_button: true,
    flash_button: true,
    telephoto: true
  };

  var cameraRollConfig = {
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
    camera_roll_preview_enabled: "true",
    camera_roll_video_enabled: "true",
    camera_roll_video_upload_enabled: "true",
    internal_camera_roll_video_upload_enabled: "true",
    longer_camera_roll_videos_enabled: "true",
    camera_roll_video_max_duration: durationStr,
    camera_roll_max_duration: durationStr,
    camera_roll_duration: durationStr,
    max_video_duration: durationStr,
    video_max_duration: durationStr,
    video_trim_max_duration: durationStr,
    trim_max_duration: durationStr,
    gold_max_duration: durationStr,
    video_sound_enabled: "true",
    microphone_enabled: "true",
    camera_microphone_enabled: "true"
  });

  // 2. Định nghĩa 16 Khung Photobooth Độc Quyền
  var photoboothFrames = [
    {
      uid: "khung_nh_hello_kitty_pastel_retro",
      id: "khung_nh_hello_kitty_pastel_retro",
      name: "Khung Hello Kitty Pastel",
      category: "Khung & Photobooth 📸",
      prompt: "Khung Hello Kitty Pastel cute frame",
      style: "cutout",
      overlay: true,
      imageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_nh_hello_kitty_pastel_retro.png",
      iconUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_nh_hello_kitty_pastel_retro.png",
      overlayImageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_nh_hello_kitty_pastel_retro.png",
      filter_type: "photobooth",
      is_photobooth: true
    },
    {
      uid: "khung_v_ng_b_n_n_t_ch_p_tr_n",
      id: "khung_v_ng_b_n_n_t_ch_p_tr_n",
      name: "Locket Việt Nam",
      category: "Khung & Photobooth 📸",
      prompt: "Locket Việt Nam frame",
      style: "cutout",
      overlay: true,
      imageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_v_ng_b_n_n_t_ch_p_tr_n.png",
      iconUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_v_ng_b_n_n_t_ch_p_tr_n.png",
      overlayImageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_v_ng_b_n_n_t_ch_p_tr_n.png",
      filter_type: "photobooth",
      is_photobooth: true
    },
    {
      uid: "khung_photobooth_b_n_sao_tr_ng_trong_su_t",
      id: "khung_photobooth_b_n_sao_tr_ng_trong_su_t",
      name: "Sao lấp lánh",
      category: "Khung & Photobooth 📸",
      prompt: "Sao lấp lánh photobooth frame",
      style: "cutout",
      overlay: true,
      imageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_photobooth_b_n_sao_tr_ng_trong_su_t.png",
      iconUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_photobooth_b_n_sao_tr_ng_trong_su_t.png",
      overlayImageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_photobooth_b_n_sao_tr_ng_trong_su_t.png",
      filter_type: "photobooth",
      is_photobooth: true
    },
    {
      uid: "khung_photobooth_kh_ng_long_v_ng",
      id: "khung_photobooth_kh_ng_long_v_ng",
      name: "Khủng long vàng",
      category: "Khung & Photobooth 📸",
      prompt: "Khủng long vàng photobooth frame",
      style: "cutout",
      overlay: true,
      imageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_photobooth_kh_ng_long_v_ng.png",
      iconUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_photobooth_kh_ng_long_v_ng.png",
      overlayImageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_photobooth_kh_ng_long_v_ng.png",
      filter_type: "photobooth",
      is_photobooth: true
    },
    {
      uid: "khung_photobooth_pastel_b_n_nh",
      id: "khung_photobooth_pastel_b_n_nh",
      name: "Công chúa",
      category: "Khung & Photobooth 📸",
      prompt: "Công chúa photobooth frame",
      style: "cutout",
      overlay: true,
      imageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_photobooth_pastel_b_n_nh.png",
      iconUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_photobooth_pastel_b_n_nh.png",
      overlayImageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_photobooth_pastel_b_n_nh.png",
      filter_type: "photobooth",
      is_photobooth: true
    },
    {
      uid: "khung_photobooth_vintage_n_u_b_n",
      id: "khung_photobooth_vintage_n_u_b_n",
      name: "4 mùa",
      category: "Khung & Photobooth 📸",
      prompt: "4 mùa photobooth frame",
      style: "cutout",
      overlay: true,
      imageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_photobooth_vintage_n_u_b_n.png",
      iconUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_photobooth_vintage_n_u_b_n.png",
      overlayImageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_photobooth_vintage_n_u_b_n.png",
      filter_type: "photobooth",
      is_photobooth: true
    },
    {
      uid: "photobooth_denim_b_n_trong_su_t",
      id: "photobooth_denim_b_n_trong_su_t",
      name: "Xanh đại dương",
      category: "Khung & Photobooth 📸",
      prompt: "Xanh đại dương photobooth frame",
      style: "cutout",
      overlay: true,
      imageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/photobooth_denim_b_n_trong_su_t.png",
      iconUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/photobooth_denim_b_n_trong_su_t.png",
      overlayImageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/photobooth_denim_b_n_trong_su_t.png",
      filter_type: "photobooth",
      is_photobooth: true
    },
    {
      uid: "scrapbook_du_l_ch_vintage_b_n_nh",
      id: "scrapbook_du_l_ch_vintage_b_n_nh",
      name: "Scrapbook du lịch",
      category: "Khung & Photobooth 📸",
      prompt: "Scrapbook du lịch photobooth frame",
      style: "cutout",
      overlay: true,
      imageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/scrapbook_du_l_ch_vintage_b_n_nh.png",
      iconUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/scrapbook_du_l_ch_vintage_b_n_nh.png",
      overlayImageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/scrapbook_du_l_ch_vintage_b_n_nh.png",
      filter_type: "photobooth",
      is_photobooth: true
    },
    {
      uid: "khung_nh_hello_kitty_b_n",
      id: "khung_nh_hello_kitty_b_n",
      name: "Vịt tốt nghiệp",
      category: "Khung & Photobooth 📸",
      prompt: "Vịt tốt nghiệp photobooth frame",
      style: "cutout",
      overlay: true,
      imageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_nh_hello_kitty_b_n.png",
      iconUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_nh_hello_kitty_b_n.png",
      overlayImageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_nh_hello_kitty_b_n.png",
      filter_type: "photobooth",
      is_photobooth: true
    },
    {
      uid: "khung_photobooth_c_n_con_ti_m_b_nh",
      id: "khung_photobooth_c_n_con_ti_m_b_nh",
      name: "cún con tiệm bánh",
      category: "Khung & Photobooth 📸",
      prompt: "cún con tiệm bánh photobooth frame",
      style: "cutout",
      overlay: true,
      imageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_photobooth_c_n_con_ti_m_b_nh.png",
      iconUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_photobooth_c_n_con_ti_m_b_nh.png",
      overlayImageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_photobooth_c_n_con_ti_m_b_nh.png",
      filter_type: "photobooth",
      is_photobooth: true
    },
    {
      uid: "khung_nh_g_u_pastel_ng_t_ng_o",
      id: "khung_nh_g_u_pastel_ng_t_ng_o",
      name: "gấu ngọt ngào",
      category: "Khung & Photobooth 📸",
      prompt: "gấu ngọt ngào photobooth frame",
      style: "cutout",
      overlay: true,
      imageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_nh_g_u_pastel_ng_t_ng_o.png",
      iconUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_nh_g_u_pastel_ng_t_ng_o.png",
      overlayImageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/khung_nh_g_u_pastel_ng_t_ng_o.png",
      filter_type: "photobooth",
      is_photobooth: true
    },
    {
      uid: "b_n_tv_h_ng_retro_khung_nh",
      id: "b_n_tv_h_ng_retro_khung_nh",
      name: "TV hồng retro",
      category: "Khung & Photobooth 📸",
      prompt: "TV hồng retro photobooth frame",
      style: "cutout",
      overlay: true,
      imageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/photobooth_1793979781_71d324.png",
      iconUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/photobooth_1793979781_71d324.png",
      overlayImageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/photobooth_1793979781_71d324.png",
      filter_type: "photobooth",
      is_photobooth: true
    },
    {
      uid: "khung_nh_b_n_doodle_pastel",
      id: "khung_nh_b_n_doodle_pastel",
      name: "doodle pastel",
      category: "Khung & Photobooth 📸",
      prompt: "doodle pastel photobooth frame",
      style: "cutout",
      overlay: true,
      imageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/photobooth_1793980888_1b252e.png",
      iconUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/photobooth_1793980888_1b252e.png",
      overlayImageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/photobooth_1793980888_1b252e.png",
      filter_type: "photobooth",
      is_photobooth: true
    },
    {
      uid: "khung_nh_hello_kitty_2x2_trong_su_t",
      id: "khung_nh_hello_kitty_2x2_trong_su_t",
      name: "Khung ảnh Hello Kitty",
      category: "Khung & Photobooth 📸",
      prompt: "Khung ảnh Hello Kitty 2x2 photobooth",
      style: "cutout",
      overlay: true,
      imageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/photobooth_1793980059_09e808.png",
      iconUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/photobooth_1793980059_09e808.png",
      overlayImageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/photobooth_1793980059_09e808.png",
      filter_type: "photobooth",
      is_photobooth: true
    },
    {
      uid: "khung_nh_shin_chan_h_ng_2x2_trong_su_t",
      id: "khung_nh_shin_chan_h_ng_2x2_trong_su_t",
      name: "Shin chan",
      category: "Khung & Photobooth 📸",
      prompt: "Shin chan photobooth frame",
      style: "cutout",
      overlay: true,
      imageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/photobooth_1793980142_28f92b.png",
      iconUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/photobooth_1793980142_28f92b.png",
      overlayImageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/photobooth_1793980142_28f92b.png",
      filter_type: "photobooth",
      is_photobooth: true
    },
    {
      uid: "khung_hello_kitty_b_n_m_y_vu_ng",
      id: "khung_hello_kitty_b_n_m_y_vu_ng",
      name: "Khung Hello Kitty cuti",
      category: "Khung & Photobooth 📸",
      prompt: "Khung Hello Kitty cuti photobooth",
      style: "cutout",
      overlay: true,
      imageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/photobooth_1793980192_4d8b35.png",
      iconUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/photobooth_1793980192_4d8b35.png",
      overlayImageUrl: "https://cdn.jsdelivr.net/gh/chapilcheapz/dns_locketgold@main/shadowrocket/assets/frames/photobooth_1793980192_4d8b35.png",
      filter_type: "photobooth",
      is_photobooth: true
    }
  ];

  obj.entries.ai_filters = JSON.stringify(photoboothFrames);

  var frameIds = photoboothFrames.map(function(f) { return f.id; });
  var standardFilters = [
    "okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows",
    "bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns",
    "tatted", "mohawk", "braces", "slimed", "princess",
    "disco_lights", "cash_money", "happy_birthday", "cutesy", "sticker_face",
    "flower_crown", "love_bug", "wedding", "cowboy_cowgirl", "giraffe",
    "clown", "easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun",
    "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"
  ];

  // 3. Cấu hình Camera Filter Config với 16 Khung Photobooth
  obj.entries.camera_filter_config = JSON.stringify({
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
    picker_filters: frameIds.concat(standardFilters),
    sheet_filters: [
      { title: { en: "Photobooth Tất Cả ♡", vi: "Photobooth Tất Cả ♡" }, filter_ids: frameIds },
      { title: { en: "Photobooth 4 Ô ♡", vi: "Photobooth 4 Ô ♡" }, filter_ids: frameIds.slice(0, 10) },
      { title: { en: "Cute & Hoạt Hình ♡", vi: "Cute & Hoạt Hình ♡" }, filter_ids: [frameIds[0], frameIds[1], frameIds[2], frameIds[3], frameIds[4], frameIds[8], frameIds[13], frameIds[14], frameIds[15]] },
      { title: { en: "Vintage & Retro ♡", vi: "Vintage & Retro ♡" }, filter_ids: [frameIds[5], frameIds[6], frameIds[7], frameIds[11], frameIds[12]] },
      { title: { en: "Goofy" }, filter_ids: ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows"] },
      { title: { en: "Looks" }, filter_ids: ["bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces", "bye_brows"] },
      { title: { en: "Celebrate" }, filter_ids: ["slimed", "princess", "disco_lights", "cash_money", "happy_birthday"] },
      { title: { en: "Cute" }, filter_ids: ["cutesy", "sticker_face", "flower_crown", "love_bug"] },
      { title: { en: "Costumes" }, filter_ids: ["wedding", "cowboy_cowgirl", "giraffe", "clown"] },
      { title: { en: "Holidays" }, filter_ids: ["easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun", "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"] }
    ]
  });

  // 4. Mở khóa toàn diện Locket Gold VIP & GỠ HOÀN TOÀN PAYWALL LỊCH SỬ / HIỆU ỨNG NGÀY LỄ
  Object.assign(obj.entries, {
    is_gold: "true",
    is_gold_user: "true",
    gold_enabled: "true",
    locket_gold_enabled: "true",
    gold_camera_themes: "true",
    gold_camera_themes_profile_menu: "true",
    gold_custom_app_icons: "true",
    gold_custom_app_icons_profile_menu: "true",
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
    android_subscribe_gold_button_enabled: "false",
    sentry_sample_rate: "0",
    ai_generation_enabled: "true",
    ai_filters_enabled: "true",
    ai_daily_limit: "999999",
    generative_filters_enabled: "true",
    // VÔ HIỆU HÓA HOÀN TOÀN BANNER / DIALOG "Mở khóa bằng Locket Gold - Nâng cấp để xem ảnh của bạn và dùng các hiệu ứng ngày lễ khác"
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
      profile_banner: true
    }),
    upsell_features: JSON.stringify({
      video: true,
      video_15s: true,
      video_30s: true,
      longer_video: true,
      app_icon_picker: true,
      camera_roll: true,
      camera_theme: true,
      locket_views: true,
      remove_ads: true,
      custom_widget_frames: true,
      groups: true,
      private_mode: true,
      camera_filter_sheet: true,
      camera_filters: true,
      camera_filter: true,
      ai_filters: true,
      profile_badge: true,
      streak_recovery: true,
      streaks: true,
      streak: true
    }),
    upsell_features_override: JSON.stringify({
      video: true,
      video_15s: true,
      video_30s: true,
      longer_video: true,
      app_icon_picker: true,
      camera_theme: true,
      camera_filter_sheet: true,
      camera_filters: true,
      camera_filter: true,
      ai_filters: true,
      custom_widget_frames: true,
      custom_widget_frames_enabled: true,
      custom_widget_frames_unlocked: true,
      birthday_frame_enabled: true,
      profile_badge: true,
      streak_recovery: true,
      streaks: true,
      streak: true
    })
  });

  // 5. Kích hoạt FULL Ghi chú & Captions (Poll, Âm nhạc, Thời tiết, Cung hoàng đạo...)
  Object.assign(obj.entries, {
    captions_enabled: "true",
    music_caption_enabled: "true",
    music_caption_song_preview_enabled: "true",
    link_caption_link_enabled: "true",
    overlay_navigator_enabled: "true",
    overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
    overlay_dynamic_captions: JSON.stringify([
      "standard", "poll", "color_palette", "review", "music", "location", "weather",
      "time", "streak", "star_sign", "party_time", "locket_count", "good_morning",
      "goodnight", "ootd", "miss_you", "custom", "halloween_2026", "phunu_2010"
    ])
  });

  // 6. Bảo toàn 100% Ghi chú & Caption gốc của Locket, bổ sung bộ Caption VIP lên trên cùng
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

  // 7. Huy hiệu Gold Profile
  Object.assign(obj.entries, {
    gold_badge_profile_menu: "true",
    gold_since_badge: "true",
    gold_since_badge_enabled: "true",
    locket_gold_badge: "true",
    locket_gold_badge_small: "true",
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
