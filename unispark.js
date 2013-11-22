;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.unispark = require('./lib/unispark');

},{"./lib/unispark":5}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
(function() {
  var exports, qsarr;

  qsarr = function(sel) {
    var nodeList;
    nodeList = typeof document !== "undefined" && document !== null ? document.querySelectorAll(sel) : void 0;
    if (nodeList != null) {
      return Array.prototype.slice.call(nodeList);
    }
  };

  exports = module.exports = qsarr;

}).call(this);

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
(function() {
  'use strict';
  var $, Unispark, exports, getColors, scaleData, unispark;

  getColors = require('./get-colors');

  scaleData = require('./scale-data');

  $ = require('./qsarr');

  Unispark = (function() {
    Unispark.prototype.chars = [2581, 2582, 2583, 2585, 2586, 2587];

    Unispark.prototype.defaults = function() {
      return {
        color: null,
        colors: null,
        colorRange: null,
        colorTheme: null,
        data: null,
        range: [0, 5]
      };
    };

    function Unispark(sel, opts) {}

    return Unispark;

  })();

  unispark = function(sel, opts) {
    var charcode, color, el, htmlOutArr, index, scope;
    scope = scope || {};
    console.log($('.unispark'));
    return htmlOutArr = (function() {
      var _i, _len, _results;
      _results = [];
      for (index = _i = 0, _len = data.length; _i < _len; index = ++_i) {
        el = data[index];
        color = colors[index % colors.length];
        charcode = 2581 + el + Math.floor(el / 3);
        _results.push("<span style=\"color:" + color + "\">&#x" + charcode + ";</span>");
      }
      return _results;
    })();
  };

  exports = module.exports = unispark;

}).call(this);

},{"./get-colors":2,"./qsarr":3,"./scale-data":4}]},{},[1])
;