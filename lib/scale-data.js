(function() {
  var exports, scaleData;

  scaleData = function(scope, data, range, domain) {
    var domainSize, err;
    if (scope == null) {
      scope = {};
    }
    if (data == null) {
      data = scope.data;
    }
    if (range == null) {
      range = 5;
    }
    if (domain == null) {
      domain = [0, range];
    }
    data || (data = []);
    if (scope.data != null) {
      try {
        data = JSON.parse(scope.data);
      } catch (_error) {
        err = _error;
        console.log("error in unispark: expected scope.data to be a JSON array string like \"[0,1,5,2,2,1,4,2,2,5,..]\"", err);
      }
    }
    if (scope.domain != null) {
      try {
        domain = JSON.parse(scope.domain);
      } catch (_error) {
        err = _error;
        console.log("error in unispark: expected scope.domain to be a JSON array string like \"[28,102]\"", err);
      }
    }
    domainSize = Math.abs(domain[0] - domain[1]);
    return data.map(function(el) {
      return Math.floor((el + (domainSize / (range * 2))) * range / domainSize);
    });
  };

  exports = module.exports = scaleData;

}).call(this);
