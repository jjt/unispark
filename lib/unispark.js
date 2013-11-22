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
