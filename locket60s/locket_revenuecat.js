/**
 * Locket Gold RevenueCat Unlock - lvn & spinach
 * Matches: ^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$)
 */

var obj = {};
try {
  obj = JSON.parse($response.body);
} catch (e) {
  obj = {};
}

if (!obj || typeof obj !== "object") {
  obj = {};
}

if (!obj.subscriber) {
  obj.subscriber = { entitlements: {}, subscriptions: {} };
}
if (!obj.subscriber.entitlements) obj.subscriber.entitlements = {};
if (!obj.subscriber.subscriptions) obj.subscriber.subscriptions = {};
if (!obj.subscriber.subscriber_attributes) obj.subscriber.subscriber_attributes = {};

obj.Attention = "Kích hoạt Locket Gold VIP thành công bởi lvn & spinach!";

var FAR_FUTURE = "2099-12-31T23:59:59Z";
var PAST = "2024-01-01T00:00:00Z";
var nowMs = Date.now();

var goldSub = {
  auto_resume_date: null,
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  management_url: "https://apps.apple.com/account/subscriptions",
  period_type: "normal",
  price: { amount: 399000, currency: "VND" },
  expires_date: FAR_FUTURE,
  grace_period_expires_date: null,
  refunded_at: null,
  unsubscribe_detected_at: null,
  original_purchase_date: PAST,
  purchase_date: PAST,
  store: "app_store",
  store_transaction_id: "490003094202846"
};

var goldEntitlement = {
  grace_period_expires_date: null,
  purchase_date: PAST,
  original_purchase_date: PAST,
  product_identifier: "locket_1600_1y",
  expires_date: FAR_FUTURE,
  ownership_type: "PURCHASED",
  store: "app_store",
  is_sandbox: false
};

const entitlements = ["Gold", "gold", "locket_gold", "pro", "profile_badge"];
for (let e of entitlements) {
  obj.subscriber.entitlements[e] = goldEntitlement;
}

const subIds = [
  "locket_1600_1y",
  "locket_2400_1y",
  "locket_gold_annual",
  "locket_gold_yearly",
  "com.locket.gold.yearly",
  "com.locket.gold"
];
for (let sid of subIds) {
  obj.subscriber.subscriptions[sid] = Object.assign({}, goldSub, { display_name: sid });
}

Object.assign(obj.subscriber.subscriber_attributes, {
  "$badge": { value: "locket_gold", updated_at_ms: nowMs },
  "profile_badge": { value: "locket_gold", updated_at_ms: nowMs },
  "gold_badge": { value: "true", updated_at_ms: nowMs },
  "locket_gold_badge": { value: "true", updated_at_ms: nowMs },
  "locket_gold_badge_small": { value: "true", updated_at_ms: nowMs },
  "locket_gold_since": { value: PAST, updated_at_ms: nowMs },
  "gold_since": { value: PAST, updated_at_ms: nowMs },
  "$gold_since": { value: PAST, updated_at_ms: nowMs },
  "gold_member_since": { value: PAST, updated_at_ms: nowMs }
});

$done({
  status: 200,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-cache, no-store, must-revalidate"
  },
  body: JSON.stringify(obj)
});
