!function(root, name, make) {
  if (typeof module != 'undefined' && module.exports) module.exports = make(require)
  else root[name] = make(function(id) { return root[id] })
}(this, 'res', function(require) {

  var one = {'dppx':1, 'dpi':96, 'dpcm':96/2.54}

  /**
   * @param {string} unit CSS resolution unit like "dppx", "dpi", or "dpcm"
   * @return {number} as measured by matchMedia by github.com/ryanve/actual
   */
  function res(unit) {
    return require('actual')('resolution', unit.valueOf(), one[unit])
  }

  /**
   * @return {number} dppx resolution a.k.a. devicePixelRatio
   */
  function ratio() {
    if (typeof window == 'undefined') return 0 // mute lookup errors for `grunt test` tests
    // devicePixelRatio: Webkit (Chrome/Android/Safari), Opera (Presto 2.8+), FF 18+
    // logicalXDPI/logicalYDPI: IE6+ (Assuming 1 could suffice here)
    return +window.devicePixelRatio || Math.sqrt(screen.deviceXDPI*screen.deviceYDPI)/one.dpi || 0
  }

  !function(o, fn) {
    for (var k in o) o.hasOwnProperty(k) && fn(k)
  }(one, function(unit) {
    /**
     * @return {number} resolution in `unit` units
     */
    res[unit] = function() {
      return ratio()*one[unit]
    }
  })

  return res
});