!function(root, name) {
  var common = typeof module != 'undefined' && !!module.exports
  var actual = common ? require('actual') : root.actual
  var sos = common ? require('sos') : root.sos
  var aok = common ? require('aok') : root.aok
  var res = common ? require('./') : root[name]
  var precision = 1/10

  function isNatural(n) {
    return typeof n == 'number' && n >= 0 && n === n
  }

  function isClose(a, b) {
    var diff = a - b
    if (diff !== diff) throw new Error('cannot compare')
    return precision >= Math.abs(diff)
  }

  aok.pass(['dpi', 'dpcm', 'dppx'], function(unit) {
    sos('group', unit)
    var rNum = res[unit]()
    var aNum = actual('resolution', unit)
    aok(unit + ' return', isNatural(rNum))
    if (rNum && aNum) aok(unit + ' accuracy', isClose(rNum, aNum))
    sos.info(unit, rNum, 'res')
    sos.info(unit, aNum, 'actual')
    sos('groupEnd')
  })

  sos('group', 'unit conversion')
  aok('dppx to dpi', isClose(96*res.dppx(), res.dpi()))
  aok('dpcm to dpi', isClose(2.54*res.dpcm(), res.dpi()))
  sos('groupEnd')

  sos.info('All tests passed :)')
}(this, 'res');
