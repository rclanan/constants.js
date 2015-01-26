(function(window, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  } else {
    // Browser Global (constants is your global library identifier)
    window.constants = factory();
  }
}(this, function() {
  var require = <%= contents %>;

  return require(1);
}));
