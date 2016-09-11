!function(root, name) {
  var common = typeof module != 'undefined' && !!module.exports
  var actual = common ? require('actual') : root.actual
  var aok = common ? require('aok') : root.aok
  var res = common ? require('./') : root[name]
  var precision = 1/20

  function isNatural(n) {
    return typeof n == 'number' && n >= 0 && n === n
  }

  function isClose(a, b) {
    var diff = a - b
    if (diff !== diff) throw new Error('cannot compare')
    return precision >= Math.abs(diff)
  }

  aok.pass(['dpi', 'dpcm', 'dppx'], function(unit) {
    var rNum = res[unit]()
    var aNum = actual('resolution', unit)
    aok(unit + ' return', isNatural(rNum))
    if (rNum && aNum) aok(unit + ' accuracy', isClose(rNum, aNum))
    aok.info('res ' + unit + ': ' + rNum)
    aok.info('actual ' + unit + ': ' + aNum)
  })

  aok('unitconversion', function() {
    if (res.dpi() < res.dpcm) return false
    if (96*res.dppx() !== res.dpi()) return false
    return isClose(2.54*res.dpcm(), res.dpi())
  })
}(this, 'res');
