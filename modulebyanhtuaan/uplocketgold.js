// ========= Locket Gold RevenueCat Rewrite by anhtuaan08 ========= //
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var obj = JSON.parse($response.body);

obj.Attention = "Locket Gold VIP by anhtuaan08";

var FAR_FUTURE = "9999-01-09T10:10:14Z";
var PAST_DATE = "2008-06-15T10:10:14Z";

var goldSub = {
  auto_resume_date: null,
  display_name: "locket_1600_1y",
  is_sandbox: true,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  management_url: "https://apps.apple.com/account/subscriptions",
  period_type: "normal",
  price: {
    amount: 399000.0,
    currency: "VND"
  },
  expires_date: FAR_FUTURE,
  grace_period_expires_date: null,
  refunded_at: null,
  unsubscribe_detected_at: null,
  original_purchase_date: PAST_DATE,
  purchase_date: PAST_DATE,
  store: "app_store",
  store_transaction_id: "2000001108724193"
};

var locketGold = {
  grace_period_expires_date: null,
  purchase_date: PAST_DATE,
  product_identifier: "locket_1600_1y",
  expires_date: FAR_FUTURE
};

obj.subscriber = obj.subscriber || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};
obj.subscriber.original_purchase_date = PAST_DATE;

// Cấp quyền vĩnh viễn cho cả 'Gold' và 'pro'
obj.subscriber.subscriptions["locket_1600_1y"] = goldSub;
obj.subscriber.subscriptions["Gold"] = goldSub;
obj.subscriber.entitlements["Gold"] = locketGold;
obj.subscriber.entitlements["pro"] = locketGold;

$done({ body: JSON.stringify(obj) });
