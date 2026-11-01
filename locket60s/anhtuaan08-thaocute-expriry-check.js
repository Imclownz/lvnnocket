// ============================================================
// 👑 Locket Gold & 60s VIP + Full Captions & AI Stickers by lvn
// Supports: Shadowrocket / Loon / Surge / Quantumult X
// Tự do sử dụng • Bản quyền lvn • Mở khóa 100% tính năng Locket
// ============================================================

(function() {
  var url = String(($request && $request.url) || "");

  // ============================================================
  // 1. REVENUECAT — Mở khóa Locket Gold + AI Effect Packs
  // ============================================================
  if (/^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$)/.test(url)) {
    try {
      var ua = ($request.headers["User-Agent"] || $request.headers["user-agent"] || "");
      var obj = JSON.parse($response.body);

      var FAR_FUTURE = "9999-01-29T10:10:14Z";
      var PAST = "2008-06-15T10:10:14Z";

      // is_sandbox: false là điều kiện TIÊN QUYẾT để Locket AI Server chấp nhận cấp quota GPU
      var goldSub = {
        auto_resume_date: null,
        display_name: "locket_1600_1y",
        is_sandbox: false,
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
        product_identifier: "Gold",
        expires_date: FAR_FUTURE
      };

      var pack10Sub = Object.assign({}, goldSub, { display_name: "com.locket.Locket.FilterPack_10Photos_400" });
      var pack20Sub = Object.assign({}, goldSub, { display_name: "com.locket.Locket.FilterPack_20Photos_500" });
      var pack10Ent = Object.assign({}, goldEnt, { product_identifier: "com.locket.Locket.FilterPack_10Photos_400" });
      var pack20Ent = Object.assign({}, goldEnt, { product_identifier: "com.locket.Locket.FilterPack_20Photos_500" });

      obj.subscriber = obj.subscriber || {};
      obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
      obj.subscriber.entitlements = obj.subscriber.entitlements || {};
      obj.subscriber.other_purchases = obj.subscriber.other_purchases || {};
      obj.Attention = "Locket Gold VIP by lvn";

      // Cấp quyền Gold
      obj.subscriber.subscriptions["Gold"] = goldSub;
      obj.subscriber.subscriptions["locket_1600_1y"] = goldSub;
      obj.subscriber.entitlements["Gold"] = goldEnt;
      obj.subscriber.entitlements["pro"] = goldEnt;

      // Cấp quyền trọn bộ AI Filter Packs (Tạo diện mạo & Nhãn dán AI)
      obj.subscriber.subscriptions["com.locket.Locket.FilterPack_10Photos_400"] = pack10Sub;
      obj.subscriber.subscriptions["com.locket.Locket.FilterPack_20Photos_500"] = pack20Sub;
      obj.subscriber.entitlements["effect_pack_10"] = pack10Ent;
      obj.subscriber.entitlements["effect_pack_20"] = pack20Ent;
      obj.subscriber.entitlements["ai_effects"] = goldEnt;
      obj.subscriber.entitlements["unlock_all_effects"] = goldEnt;

      $done({ body: JSON.stringify(obj) });
    } catch (e) {
      $done({});
    }
    return;
  }

  // ============================================================
  // 2. FIREBASE REMOTE CONFIG — 60s Video, Camera Roll & AI Stickers
  // ============================================================
  if (/^https:\/\/firebaseremoteconfig\.googleapis\.com\/v1\/projects\/locket-4252a\//.test(url)) {
    try {
      var obj = JSON.parse($response.body);
      obj.Attention = "Locket Gold VIP by lvn";
      obj.state = "UPDATE"; // BẮT BUỘC: Ép Locket iOS áp dụng cấu hình mới ngay lập tức
      obj.entries = obj.entries || {};
      var originalEntries = Object.assign({}, obj.entries);

      var MY_VIDEO_DURATION = 60.0;
      var durationStr = "60";
      var MAX_SIZE_BYTES = 104857600; // 100MB

      // Cấu hình Camera quay 60s & Bitrate nén 0.45 Mbps
      // (60s x 0.45Mbps = 3.37MB + 0.96MB Audio = ~4.3MB, luôn dưới mức trần 6MB của Firebase Storage)
      var cameraConfig = {
        gold_max_duration: MY_VIDEO_DURATION,
        goldMaxDuration: MY_VIDEO_DURATION,
        max_duration: MY_VIDEO_DURATION,
        maxDuration: MY_VIDEO_DURATION,
        ultra_wide: true,
        ultraWide: true,
        volume_button: true,
        volumeButton: true,
        flash_button: true,
        telephoto: true,
        srgb: true,
        lanczos: true,
        quality_mbps: 0.45,
        qualityMbps: 0.45
      };

      // Cấu hình Tải & Cắt video từ Thư viện (Camera Roll) lên tới 60s
      var cameraRollConfig = {
        gold_max_duration: MY_VIDEO_DURATION,
        goldMaxDuration: MY_VIDEO_DURATION,
        video_max_duration: MY_VIDEO_DURATION,
        videoMaxDuration: MY_VIDEO_DURATION,
        max_duration: MY_VIDEO_DURATION,
        maxDuration: MY_VIDEO_DURATION,
        trim_max_duration: MY_VIDEO_DURATION,
        trimMaxDuration: MY_VIDEO_DURATION,
        camera_roll_max_duration: MY_VIDEO_DURATION,
        camera_roll_video_max_duration: MY_VIDEO_DURATION,
        max_file_size: MAX_SIZE_BYTES,
        max_upload_bytes: MAX_SIZE_BYTES,
        max_size_bytes: MAX_SIZE_BYTES,
        quality_mbps: 0.45,
        qualityMbps: 0.45,
        flash_button: true,
        video: true
      };

      obj.entries.camera = JSON.stringify(cameraConfig);
      obj.entries.camera_roll = JSON.stringify(cameraRollConfig);

      // Kích hoạt toàn bộ Feature Gates
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
          camera_filters: "enabled",
          custom_camera_filters: "enabled",
          ai_filters: "enabled",
          ai_looks: "enabled",
          avatar_generator: "enabled",
          generative_filters: "enabled",
          effects: "enabled",
          effect_packs: "enabled",
          longer_camera_roll_videos: "enabled",
          camera_roll_video: "enabled"
        }),
        upsell_features: JSON.stringify({
          app_icon_picker: true,
          camera_roll: true,
          camera_theme: true,
          locket_views: true,
          remove_ads: true,
          custom_widget_frames: true,
          camera_filters: true,
          ai_filters: true,
          longer_video: true
        }),
        paywall_presentation_config: JSON.stringify({
          uid: "paywall_testflight",
          onboarding: false,
          after_sent_moment: false,
          on_foreground: false,
          interval: 2592000,
          profile_banner: true
        }),
        feature_discovery_popup_config: JSON.stringify({
          tag: "LOCKET GOLD VIP",
          tag_gradient: true,
          tag_style: "gold_gradient",
          title: "Đã Lên Locket Gold 💛",
          feature_set: [{
            title: "Locket Gold & 60s VIP by lvn",
            body: "Chúc bạn có những trải nghiệm thật tuyệt vời cùng Locket Gold! ✨",
            imageURL: "https://i.ibb.co/ymX8cdHg/n-n-2.png"
          }],
          primary_button_title: "Tuyệt vời",
          campaign: "locket_gold_welcome_v3",
          start_at: "2020-01-01T00:00:00",
          end_at: "2099-12-31T23:59:59",
          use_local_time_zone: true
        }),
        android_subscribe_gold_button_enabled: "false",
        profile_badge_visible: "true",
        lunar_new_year_app_icon_enabled: "true",
        settings_instagram_url: "https://instagram.com/",
        settings_tiktok_url: "https://tiktok.com/"
      });

      // Tắt sạch Quảng cáo & Tracking Sentry
      Object.assign(obj.entries, {
        history_ads_mode: "off",
        history_ads_prefetch_count: "0",
        history_ads_prefetch_immediate: "false",
        history_ads_prefetch_reroute: "false",
        history_ads_dynamic_insertion: "false",
        history_ads_refresh_prefetch_on_foreground: "false",
        history_ads_floor_price: "0",
        history_ads_floor_price_att: "0",
        history_ad_log_displayed_on_background: "false",
        history_ads_debug_menu: "false",
        sentry_sample_rate: "0",
        sentry_network_tracing: "false",
        sentry_performance_tracking: "false",
        sentry_trace_sample_rate: "0",
        sentry_profiles_sample_rate: "0"
      });

      // Cấu hình Toàn Bộ Nhãn Dán Camera & Tính năng Tạo Diện Mạo (AI)
      Object.assign(obj.entries, {
        camera_filter_config: JSON.stringify({
          allows_custom_filters: true,
          show_filter_button: true,
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
        }),
        ai_effects_enabled: "true",
        ai_filters_enabled: "true",
        generative_ai_enabled: "true",
        face_creator_enabled: "true",
        camera_filters_enabled: "true",
        photo_enhancer_enabled: "true",
        avatar_generator_enabled: "true",
        allows_custom_filters: "true",
        show_filter_button: "true"
      });

      // Toàn bộ cờ thời lượng video 60s chuẩn hóa cho iOS Locket
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
        goldMaxDuration: durationStr,
        video_trim_min_duration: "1",
        trim_min_duration: "1",
        max_file_size: MAX_SIZE_BYTES.toString(),
        max_upload_bytes: MAX_SIZE_BYTES.toString(),
        video_quality_mbps: "0.45",
        video_sound_enabled: "true",
        microphone_enabled: "true",
        camera_microphone_enabled: "true",
        audio_session_deactivation_enabled: "true",
        zoom_enabled: "true",
        upload_main: "false",
        upload_main_image_quality: "0.8",
        upload_main_image_size: "1440",
        upload_thumbnail_image_quality: "0.8",
        upload_thumbnail_image_size: "1020"
      });

      // Mở khóa Giới hạn bạn bè không giới hạn
      Object.assign(obj.entries, {
        max_friends_count: "999999",
        friend_limit_mode: "0",
        soft_friend_limit_threshold_count: "999999",
        show_friend_limit_on_cam: "false",
        signup_max_friends_count: "999999",
        celebrity_inbox_limit: "999999",
        show_friend_suggestions_by_default: "true",
        show_all_contacts: "true",
        show_invite_suggestions: "true",
        show_no_friends_bottom_sheet: "false",
        signup_allow_skip_add_friends: "true"
      });

      // Moments, Streak, Chat & Nhắn tin
      try {
        var streak = JSON.parse(obj.entries.streak_config || "{}");
        streak.minimum_recovery_count = 0;
        streak.minimum_display_count = 0;
        obj.entries.streak_config = JSON.stringify(streak);
      } catch (e) {}

      Object.assign(obj.entries, {
        moment_views_enabled: "true",
        moment_views_v2: "true",
        record_moment_views: "true",
        notify_moment_views: "true",
        get_moment_views_as_cloud_function: "true",
        moment_reactions_v2: "true",
        chat_reactions_enabled: "true",
        conversation_reactions: "true",
        typing_indicators_enabled: "true",
        unsend_message_enabled: "true",
        reply_prototype_enabled: "true",
        messages_integration: "true",
        conversations_enabled: "true",
        fetch_moments_in_conversation: "true",
        hide_chat_button: "false",
        groups_enabled: "true",
        send_to_self_only_mode: "always_enabled",
        time_travel_rewind_v2_enabled: "true",
        calendar_delete_moment_enabled: "true",
        calendar_rewind_enabled: "false",
        locket_yearbook_story_sharing_encouraged: "true",
        rollcall_enabled: "true",
        rollcall_comment_actions: "true",
        rollcall_profile_button: "true",
        rollcall_prompt_export_after_share: "true",
        rollcall_confirm_skip_tagging: "false",
        rollcall_tap_to_tag_enabled: "false"
      });

      // Khung Widget & Live Activity
      Object.assign(obj.entries, {
        widget_frame_event_max_images: "10",
        android_widget_frame_event_enabled: "true",
        widget_badge_enabled: "true",
        widget_badge_v2: "true",
        widget_stale_state_enabled: "false",
        widget_last_sent_indicator: "false",
        widget_sync_token_reload_mode: "clearTokenNever",
        custom_widget_frames: "enabled",
        custom_widget_frames_enabled: "true",
        widget_frame_event: JSON.stringify({
          uid: "lvn_royal_gold_2026",
          url: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
          use_local_time_zone: true,
          placement: "below",
          start_at: "2020-01-01T00:00:00",
          end_at: "2099-12-31T23:59:59"
        }),
        live_activity_onboarding: "true",
        live_activity_onboarding_variant: "friending",
        register_live_activity_push_to_start_token: "true",
        live_activity_remove_stale_start_token: "true",
        notification_preferences_live_activities: "true",
        notification_preferences: "true",
        notification_reply_body_visible: "true",
        activity_bar_enabled: "true",
        journal_activity_bar_enabled: "true",
        journal_settings: JSON.stringify({
          debug_menu_enabled: false,
          focus_animation: true,
          compact_header: true,
          friends_button: true,
          reverse_scroll_direction: false,
          streak_visualization: true,
          streak_visualization_style: "gradient",
          streak_header_minimum_count: 0,
          streak_visualization_minimum_count: 2,
          overlay_indicators: { location: true, music: true, static_content: true, weather: true }
        }),
        qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
        custom_profile_pics: "true",
        profile_menu_v2_enabled: "true"
      });

      // CDN & Storage
      Object.assign(obj.entries, {
        cdn_domain_replacements: JSON.stringify({ "firebasestorage.googleapis.com": "cdn.locketcamera.com" }),
        cdn_domain_replacements_video: "true",
        storage_bucket: "gs://locket-img",
        storage_bucket_video: "gs://locket-video",
        image_cache_max_age_sec: "157680000",
        image_cache_max_size: "400000000",
        history_cache_age_days: "1000",
        user_cache_max_age_sec: "691200",
        friends_cache_max_age_sec: "2592000",
        image_fetch_cache: "true",
        image_cache_use_shared: "true",
        use_doc_dir_for_image_cache: "true",
        efficient_history_cache_invalidation: "true",
        timestamp_based_history_fetches: "true",
        get_latest_moment_v2: "true",
        fetch_users_from_cloud_function: "true",
        refresh_interval: "60",
        firestore_refresh_v2: "true",
        firestore_refresh_v3: "true",
        keychain_access_retries: "true",
        blocked_users_cached_sync_enabled: "true",
        beta_features_enabled: "true",
        join_testflight_enabled: "true",
        safety_center: "true",
        help_center: "true",
        support_v2: "true",
        privacy_choices_setting: "true",
        request_att_permission: "true",
        invite_link_preview_variant: "4"
      });

      // Mở khóa TOÀN BỘ Dynamic Captions tương tác (Bình chọn / Poll, Cung hoàng đạo, Âm nhạc...)
      Object.assign(obj.entries, {
        overlay_navigator_enabled: "true",
        overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
        captions_enabled: "true",
        music_caption_enabled: "true",
        music_caption_song_preview_enabled: "true",
        link_caption_link_enabled: "true",
        overlay_dynamic_captions: JSON.stringify([
          "standard", "poll", "color_palette", "review", "music", "location", "weather",
          "time", "streak", "star_sign", "party_time", "locket_count", "good_morning",
          "goodnight", "ootd", "miss_you", "custom", "phunu_2010", "halloween_2026"
        ])
      });

      // ============================================================
      // BẢO TOÀN overlay_items GỐC + GHÉP NỐI 240+ CAPTIONS ĐỘC QUYỀN
      // ============================================================
      try {
        var groups = [];
        try {
          groups = JSON.parse(originalEntries.overlay_items || "[]");
          if (!Array.isArray(groups)) groups = [];
        } catch (e) {
          groups = [];
        }

        // Danh sách Caption bổ sung độc quyền lvn
        var lvnItems = [
          { overlay_id: "caption:lvn_gold60s", source: "remote", caption: { background: { colors: ["#FC466B", "#FCA311", "#FFDD00"] }, icon: { data: "👑", type: "emoji" }, max_lines: 1, text: "Locket 60s by lvn", text_color: "#000000", type: "static_content" } },
          { overlay_id: "caption:lvn_anh_iu_vo", source: "remote", caption: { background: { colors: ["#FFAFCC", "#FFC8DD", "#CDB4DB"] }, icon: { data: "💖", type: "emoji" }, max_lines: 1, text: "Anh iu vợ", text_color: "#FFFFFF", type: "static_content" } },
          { overlay_id: "caption:lvn_anh_iu_vo_lum", source: "remote", caption: { background: { colors: ["#FF758C", "#FF7EB3"] }, icon: { data: "🥰", type: "emoji" }, max_lines: 1, text: "Anh iu vợ lúmmm", text_color: "#FFFFFF", type: "static_content" } },
          { overlay_id: "caption:lvn_hihi", source: "remote", caption: { background: { colors: ["#FAD0C4", "#FFD1FF"] }, icon: { data: "✨", type: "emoji" }, max_lines: 1, text: "hihi", text_color: "#8C315F", type: "static_content" } },
          { overlay_id: "caption:lvn_vippp", source: "remote", caption: { background: { colors: ["#8A2387", "#E94057", "#F27121"] }, icon: { data: "🔥", type: "emoji" }, max_lines: 1, text: "vippp", text_color: "#FFFFFF", type: "static_content" } },
          { overlay_id: "caption:lvn_dang_ban_tuong_tu", source: "remote", caption: { background: { colors: ["#1A2980", "#26D0CE"] }, icon: { data: "💭", type: "emoji" }, max_lines: 1, text: "Đang bận tương tư", text_color: "#FFFFFF", type: "static_content" } },
          { overlay_id: "caption:lvn_rep_tin_nhan", source: "remote", caption: { background: { colors: ["#F00000", "#DC281E"] }, icon: { data: "📩", type: "emoji" }, max_lines: 1, text: "Rep tin nhắn đi", text_color: "#FFFFFF", type: "static_content" } },
          { overlay_id: "caption:lvn_flex_den_tho", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, icon: { data: "💎", type: "emoji" }, max_lines: 1, text: "Flex đến hơi thở cuối", text_color: "#000000", type: "static_content" } },
          { overlay_id: "caption:lvn_overthinking", source: "remote", caption: { background: { colors: ["#2C3E50", "#4CA1AF"] }, icon: { data: "🤯", type: "emoji" }, max_lines: 1, text: "Overthinking vai chưởng", text_color: "#FFFFFF", type: "static_content" } },
          { overlay_id: "caption:lvn_oach_xa_lach", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, icon: { data: "🥬", type: "emoji" }, max_lines: 1, text: "oách xà lách", text_color: "#000000", type: "static_content" } },
          { overlay_id: "caption:lvn_tram_cam_nhe", source: "remote", caption: { background: { colors: ["#1F1C2C", "#928DAB"] }, icon: { data: "🫠", type: "emoji" }, max_lines: 1, text: "Trầm cảm nhẹ", text_color: "#FFFFFF", type: "static_content" } },
          { overlay_id: "caption:lvn_con_cai_nit", source: "remote", caption: { background: { colors: ["#D7CCC8", "#8D6E63"] }, icon: { data: "🧶", type: "emoji" }, max_lines: 1, text: "còn cái nịt", text_color: "#FFFFFF", type: "static_content" } },
          { overlay_id: "caption:lvn_deadline_ruot", source: "remote", caption: { background: { colors: ["#ED213A", "#93291E"] }, icon: { data: "🔥", type: "emoji" }, max_lines: 1, text: "Deadline dí tụt quần", text_color: "#FFFFFF", type: "static_content" } }
        ];

        // Lọc bỏ mục cũ nếu đã có mục lvn
        var sectionTitle = "🎨 Captions được thêm by lvn";
        var existIdx = groups.findIndex(function(g) { return g && g.section === sectionTitle; });
        if (existIdx >= 0) {
          groups[existIdx].items = lvnItems;
        } else {
          groups.push({ section: sectionTitle, items: lvnItems });
        }

        // Nếu server chưa có section Decorative thì bổ sung
        var decIdx = groups.findIndex(function(g) { return g && (g.section === "Decorative" || g.section === "🎨 Decorative"); });
        if (decIdx < 0) {
          groups.unshift({
            section: "Decorative",
            items: [
              { overlay_id: "caption:party_time", source: "remote", caption: { background: { colors: ["#5EFFF5", "#FCFF57"] }, icon: { data: "🪩", type: "emoji" }, max_lines: 1, text: "Quẩy thôi!", text_color: "#000000", type: "static_content" } },
              { overlay_id: "caption:ootd", source: "remote", caption: { background: { colors: ["#FFFFFF", "#DBDBDB"] }, icon: { data: "🕶", type: "emoji" }, max_lines: 1, text: "OOTD", text_color: "#101010", type: "static_content" } },
              { overlay_id: "caption:miss_you", source: "remote", caption: { background: { colors: ["#EC0C00", "#FF493F"] }, icon: { data: "🥰", type: "emoji" }, max_lines: 1, text: "Nhớ quá trờiii", text_color: "#FFFFFF", type: "static_content" } }
            ]
          });
        }

        obj.entries.overlay_items = JSON.stringify(groups);
      } catch (e) {
        if (originalEntries.overlay_items) {
          obj.entries.overlay_items = originalEntries.overlay_items;
        }
      }

      // Gold badge flags
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

  // ============================================================
  // 3. POST MOMENT V2 — Chuẩn Hóa Overlay ID Cho Video 60s & Caption
  // ============================================================
  if (/^https:\/\/(?:api\.locketcamera\.com|us-central1-locket-4252a\.cloudfunctions\.net)\/postMomentV2(?:\?.*)?$/.test(url)) {
    try {
      var raw = ($request && $request.body);
      if (typeof raw !== 'string' || raw.length > 2000000 || raw.length < 8) {
        $done({});
        return;
      }

      var payload = JSON.parse(raw);
      if (!payload || typeof payload !== 'object' || !payload.data || typeof payload.data !== 'object') {
        $done({});
        return;
      }

      var overlays = Array.isArray(payload.data.overlays) ? payload.data.overlays : [];
      var changed = false;

      // Danh sách overlay ID chính thức của Locket
      var officialIds = new Set([
        "caption:standard", "caption:poll", "caption:color_palette", "caption:review",
        "caption:music", "caption:location", "caption:weather", "caption:time",
        "caption:streak", "caption:star_sign", "caption:party_time", "caption:locket_count",
        "caption:good_morning", "caption:goodnight", "caption:ootd", "caption:miss_you",
        "caption:custom", "caption:phunu_2010", "caption:halloween_2026"
      ]);

      // Mọi custom overlay ID không nằm trong danh sách chuẩn của server
      // được tự động chuẩn hóa về caption:standard để Locket backend 100% chấp nhận upload!
      overlays.forEach(function(ov) {
        if (!ov || ov.overlay_type !== 'caption' || !ov.overlay_id) return;
        if (!officialIds.has(ov.overlay_id)) {
          ov.overlay_id = 'caption:standard';
          if (ov.data && typeof ov.data === 'object') {
            ov.data.type = 'standard';
            ov.data.max_lines = ov.data.max_lines || 2;
          }
          if (ov.alt_text && (!payload.data.caption || payload.data.caption === '')) {
            payload.data.caption = ov.alt_text;
          }
          changed = true;
        }
      });

      if (changed) {
        $done({ body: JSON.stringify(payload) });
      } else {
        $done({});
      }
    } catch (e) {
      $done({});
    }
    return;
  }

  // ============================================================
  // 4. PROFILE BADGE — Huy Hiệu Gold Cho Tài Khoản
  // ============================================================
  if (/^https:\/\/(api\.locketcamera\.com|us-central1-locket-4252a\.cloudfunctions\.net)\/(?:[^?#]*\/)?(fetchUserV2|getUserByUsername|changeProfileInfo|updateUser|createUser)(?:[/?#]|$)/.test(url)) {
    try {
      var rawBody = $response && $response.body;
      if (typeof rawBody !== 'string' || !rawBody.trim()) {
        $done({});
        return;
      }
      var data = JSON.parse(rawBody);
      function patchUser(u) {
        if (!u || typeof u !== 'object') return;
        u.badge = "locket_gold";
        u.is_gold = true;
        u.gold_badge = true;
        if (Array.isArray(u.badges)) {
          if (u.badges.indexOf("locket_gold") === -1) u.badges.push("locket_gold");
        } else {
          u.badges = ["locket_gold"];
        }
      }
      if (data.data) patchUser(data.data);
      if (data.result && data.result.data) patchUser(data.result.data);
      if (data.user) patchUser(data.user);
      $done({ body: JSON.stringify(data) });
    } catch (e) {
      $done({});
    }
    return;
  }

  $done({});
})();
