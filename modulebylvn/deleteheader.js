// Locket 60s by lvn
(function(){
  try {
    var headers = Object.assign({}, $request.headers || {});
    for (var k in headers) {
      var lk = k.toLowerCase();
      if (lk === 'x-revenuecat-etag' || lk === 'if-none-match') {
        headers[k] = '';
      }
    }
    headers['X-RevenueCat-ETag'] = '';
    headers['if-none-match'] = '';
    $done({ headers: headers });
  } catch (e) {
    $done({});
  }
})();
