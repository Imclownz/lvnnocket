// ============================================================
// 👑 Locket Gold VIP (Video 45s, Nhãn dán, Full Ghi chú & Captions)
// Tối ưu hóa theo chuẩn Shadowrocket 2026 mới nhất
// ============================================================

(function() {
  var url = String(($request && $request.url) || "");

  // ============================================================
  // 1. REVENUECAT — Mở khóa Locket Gold vĩnh viễn
  // ============================================================
  if (/^https:\/\/api\.revenuecat\.com\//.test(url)) {
    try {
      var obj = JSON.parse($response.body);

      var FAR_FUTURE = "9999-01-09T10:10:14Z";
      var PAST = "2006-10-07T10:10:14Z";

      var goldSub = {
        auto_resume_date: null,
        display_name: "locket_1600_1y",
        is_sandbox: true,
        ownership_type: "PURCHASED",
        billing_issues_detected_at: null,
        management_url: "https://apps.apple.com/account/subscriptions",
        period_type: "normal",
        price: { amount: 399000.0, currency: "VND" },
        expires_date: FAR_FUTURE,
        grace_period_expires_date: null,
        refunded_at: null,
        unsubscribe_detected_at: null,
        original_purchase_date: PAST,
        purchase_date: PAST,
        store: "app_store",
        store_transaction_id: "2000001108724193"
      };

      var goldEnt = {
        grace_period_expires_date: null,
        purchase_date: PAST,
        product_identifier: "locket_1600_1y",
        expires_date: FAR_FUTURE
      };

      obj.subscriber = obj.subscriber || {};
      obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
      obj.subscriber.entitlements = obj.subscriber.entitlements || {};
      obj.subscriber.non_subscriptions = obj.subscriber.non_subscriptions || {};
      obj.subscriber.other_purchases = obj.subscriber.other_purchases || {};
      obj.subscriber.original_purchase_date = PAST;
      obj.Attention = "Chúc mừng bạn đã lên Locket Gold VIP!";

      // Kích hoạt toàn bộ định danh Gold & Pro
      obj.subscriber.subscriptions["locket_1600_1y"] = goldSub;
      obj.subscriber.subscriptions["Gold"] = Object.assign({}, goldSub, { display_name: "Gold" });
      obj.subscriber.entitlements["Gold"] = goldEnt;
      obj.subscriber.entitlements["pro"] = goldEnt;

      $done({ body: JSON.stringify(obj) });
    } catch (e) {
      $done({});
    }
    return;
  }

  // ============================================================
  // 2. FIREBASE REMOTE CONFIG — Video 45s, Nhãn dán & Full Ghi chú
  // ============================================================
  if (/^https:\/\/firebaseremoteconfig\.googleapis\.com\//.test(url)) {
    try {
      var obj = JSON.parse($response.body);
      obj.Attention = "Locket Gold VIP 45s by lvn";
      obj.state = "UPDATE";
      obj.entries = obj.entries || {};
      var originalEntries = Object.assign({}, obj.entries);

      var MY_DURATION = 45.0;
      var durationStr = "45.0";

      // 1. Cấu hình Camera & Camera Roll: Video 45s (Chuẩn tự nhiên AVFoundation không can thiệp bitrate gây lỗi)
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

      // 2. Kích hoạt tính năng Gold & gỡ hoàn toàn Paywall
      Object.assign(obj.entries, {
        feature_gates: JSON.stringify({
          app_icon_picker: "enabled",
          camera_roll: "enabled",
          camera_theme: "enabled",
          locket_views: "enabled",
          long_captions: "enabled",
          longer_video: "enabled",
          unlimited_friends: "enabled",
          priority_support: "enabled",
          profile_badge: "enabled",
          remove_ads: "enabled",
          video: "enabled",
          custom_widget_frames: "enabled",
          streak_recovery: "enabled",
          ai_filters: "enabled",
          ai_camera_filters: "enabled",
          generative_ai: "enabled",
          ai_captions: "enabled"
        }),
        // KHÔNG đưa ai_filters vào upsell_features để Locket không hiện popup "Mở khóa bằng Locket Gold"
        upsell_features: JSON.stringify({
          app_icon_picker: true,
          camera_roll: true,
          camera_theme: true,
          locket_views: true,
          remove_ads: true,
          custom_widget_frames: true
        }),
        paywall_presentation_config: JSON.stringify({
          uid: "paywall_testflight",
          onboarding: false,
          after_sent_moment: false,
          on_foreground: false,
          interval: 2592000,
          profile_banner: true
        }),
        android_subscribe_gold_button_enabled: "false",
        profile_badge_visible: "true",
        history_ads_mode: "off",
        sentry_sample_rate: "0"
      });

      // 3. Mở khóa TOÀN BỘ Nhãn dán & AI Camera Filters
      obj.entries.camera_filter_config = JSON.stringify({
        allows_custom_filters: true,
        show_filter_button: true,
        allows_ai_filters: true,
        ai_filters_enabled: true,
        show_ai_filter_button: true,
        ai_quota_per_day: 999999,
        allow_unlimited_ai: true,
        sheet_enabled: true,
        open_sheet_immediately: true,
        sheet_filters: [
          { title: { en: "Goofy" }, filter_ids: ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows"] },
          { title: { en: "Looks" }, filter_ids: ["bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces", "bye_brows"] },
          { title: { en: "Celebrate" }, filter_ids: ["slimed", "princess", "disco_lights", "cash_money", "happy_birthday"] },
          { title: { en: "Cute" }, filter_ids: ["cutesy", "sticker_face", "flower_crown", "love_bug"] },
          { title: { en: "Costumes" }, filter_ids: ["wedding", "cowboy_cowgirl", "giraffe", "clown"] },
          { title: { en: "Holidays" }, filter_ids: ["easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun", "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"] }
        ],
        picker_filters: [
          "okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows",
          "bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns",
          "tatted", "mohawk", "braces", "slimed", "princess",
          "disco_lights", "cash_money", "happy_birthday", "cutesy", "sticker_face",
          "flower_crown", "love_bug", "wedding", "cowboy_cowgirl", "giraffe",
          "clown", "easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun",
          "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"
        ]
      });

      Object.assign(obj.entries, {
        ai_generation_enabled: "true",
        ai_filters_enabled: "true",
        ai_daily_limit: "999999",
        generative_filters_enabled: "true"
      });

      // 4. Kích hoạt FULL Ghi chú & Captions (Poll, Âm nhạc, Thời tiết, Cung hoàng đạo...)
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

        // Lọc bỏ section VIP cũ nếu có
        groups = groups.filter(function(g){ return g && g.section !== vipSection.section; });
        // Chèn section VIP vào đầu danh sách (giữ nguyên toàn bộ section gốc bên dưới)
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
        profile_badge_enabled: "true",
        profile_badge_visible: "true",
        profile_gold_badge: "true"
      });

      $done({ body: JSON.stringify(obj) });
    } catch (e) {
      $done({});
    }
    return;
  }

  $done({});
})();
