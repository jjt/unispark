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
