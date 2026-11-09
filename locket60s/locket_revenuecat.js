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

obj.Attention = "Kích hoạt Locket Gold VIP thành công bởi lvn & spinach!";

var FAR_FUTURE = "2099-12-31T23:59:59Z";
var PAST = "2024-01-01T00:00:00Z";

var goldSub = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: FAR_FUTURE,
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: PAST,
  purchase_date: PAST,
  store: "app_store"
};

var goldEntitlement = {
  grace_period_expires_date: null,
  purchase_date: PAST,
  product_identifier: "locket_2400_1y",
  expires_date: FAR_FUTURE,
  ownership_type: "PURCHASED",
  store: "app_store",
  is_sandbox: false
};

const entitlements = ["Gold", "gold", "locket_gold", "pro"];
for (let e of entitlements) {
  obj.subscriber.entitlements[e] = goldEntitlement;
}

obj.subscriber.subscriptions["locket_2400_1y"] = goldSub;
obj.subscriber.subscriptions["locket_1600_1y"] = Object.assign({}, goldSub, { display_name: "locket_1600_1y" });

$done({
  status: 200,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-cache, no-store, must-revalidate"
  },
  body: JSON.stringify(obj)
});
