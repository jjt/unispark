(function() {
  var exports, getColors;

  getColors = function(scope) {
    var colors, err;
    if (scope == null) {
      scope = {};
    }
    colors = ['#c00'];
    console.log(scope.colors);
    switch (scope.colorTheme) {
      case 'solarized':
        colors = ['#b58900', '#cb4b16', '#dc322f', '#d33682', '#6c71c4', '#268bd2', '#2aa198', '#859900'];
    }
    if (scope.color != null) {
      colors = [scope.color];
    }
    if (scope.colors != null) {
      try {
        colors = JSON.parse(scope.colors);
      } catch (_error) {
        err = _error;
        console.log("unispark err: scope.colors should be a JSON array string like \"['#cfa', '#88a']\"", err);
      }
    }
    return colors;
  };

  exports = module.exports = getColors;

}).call(this);
