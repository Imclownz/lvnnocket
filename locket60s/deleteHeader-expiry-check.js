// deleteHeader by lvn (Shadowrocket / Loon / Quantumult X)
const version = 'V1.0.2';

function setHeaderValue(e, a, d) {
  var r = a.toLowerCase();
  r in e ? (e[r] = d) : (e[a] = d);
}

try {
  var modifiedHeaders = $request.headers || {};
  setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");
  setHeaderValue(modifiedHeaders, "x-revenuecat-etag", "");
  setHeaderValue(modifiedHeaders, "If-None-Match", "");
  setHeaderValue(modifiedHeaders, "if-none-match", "");
  $done({ headers: modifiedHeaders });
} catch (e) {
  $done({});
}
