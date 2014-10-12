!function(root, name) {
  var common = typeof module != 'undefined' && !!module.exports
  var aok = common ? require('aok') : root.aok
  var res = common ? require('../src') : root[name]
  var precision = 1/20

  function isNatural(n) {
    return typeof n == 'number' && n >= 0 && n === n
  }

  aok.pass(['dpi', 'dpcm', 'dppx'], function(unit) {
    var nums = [res[unit](), res(unit)]
    if (nums[0] || nums[1]) aok.info(unit + ': \n' + nums.join('\n'))
    aok('res.' + unit + '()', isNatural(nums[0]))
    aok('res("' + unit + '")', isNatural(nums[1]))
  })

  aok('unitconversion', function() {
    if (res.dpi() < res.dpcm) return false
    if (96*res.dppx() !== res.dpi()) return false
    return precision >= Math.abs(2.54*res.dpcm() - res.dpi())
  })
}(this, 'res');