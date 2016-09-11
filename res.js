!function(root, name, make) {
  if (typeof module != 'undefined' && module.exports) module.exports = make()
  else root[name] = make()
}(this, 'res', function() {

  var one = {dpi: 96, dpcm: 96 / 2.54}

  function ie() {
    return Math.sqrt(screen.deviceXDPI * screen.deviceYDPI) / one.dpi
  }

  function dppx() {
    // devicePixelRatio: Webkit (Chrome/Android/Safari), Opera (Presto 2.8+), FF 18+
    return typeof window == 'undefined' ? 0 : +window.devicePixelRatio || ie() || 0
  }

  function dpcm() {
    return dppx() * one.dpcm
  }

  function dpi() {
    return dppx() * one.dpi
  }

  return {'dppx': dppx, 'dpi': dpi, 'dpcm': dpcm}
});
