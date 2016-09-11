!function(root, name, make) {
  if (typeof module != 'undefined' && module.exports) module.exports = make()
  else root[name] = make()
}(this, 'res', function() {

  var res = {}
  var one = {'dppx':1, 'dpi':96, 'dpcm':96/2.54}

  /**
   * @return {number} dppx resolution a.k.a. devicePixelRatio
   */
  function ratio() {
    if (typeof window == 'undefined') return 0
    // devicePixelRatio: Webkit (Chrome/Android/Safari), Opera (Presto 2.8+), FF 18+
    // logicalXDPI/logicalYDPI: IE6+ (Assuming 1 could suffice here)
    return +window.devicePixelRatio || Math.sqrt(screen.deviceXDPI*screen.deviceYDPI)/one.dpi || 0
  }

  /**
   * @param {string} unit CSS resolution property name from `one`
   */
  function expose(unit) {
    var conversion = one[unit];
    res[unit] = 1 == conversion ? ratio : function() {
      // convert resolution to `units` units
      return ratio()*conversion
    }
  }

  expose('dppx')
  expose('dpcm')
  expose('dpi')
  return res
});
