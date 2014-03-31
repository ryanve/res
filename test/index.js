!function(root, name) {
  var common = typeof module != 'undefined' && !!module.exports;
  var aok = common ? require('aok') : root.aok;
  var res = common ? require('../src') : root[name];
  var precision = 1/20;
  if (![].some) aok.prototype.express = aok.info;

  aok({id:'dpi', test:function() {
    var n = this.remark = res.dpi();
    return 0 < n ? true === res.dpi(n) && false === res.dpi(n+precision) : 0 === n;
  }});

  aok({id:'dppx', test:function() {
    var n = this.remark = res.dppx();
    return 0 < n ? true === res.dppx(n) && false === res.dppx(n+precision) : 0 === n;
  }});
  
  aok({id:'dppx', test:function() {
    var n = this.remark = res.dppx();
    return 0 < n ? true === res.dppx(n) && false === res.dppx(n+precision) : 0 === n;
  }});

  aok({id:'dpcm', test:function() {
    var n = this.remark = res.dpcm();
    return 0 < n ? true === res.dpcm(n) && false === res.dpcm(n+precision) : 0 === n;
  }});

  aok({id:'unitConversion', test:function() {
    var dpi = res.dpi(), dpcm = res.dpcm(), dppx = res.dppx();
    if (0 === dppx && 0 === dpcm && 0 === dpi) return true; // old browsers
    if (!res.dppx(dppx) || !res.dpi(dpi) || !res.dpcm(dpcm)) return false;
    if (res.dppx(dppx+precision) || res.dpi(dpi+precision) || res.dpcm(dpcm+precision)) return false;
    return 2.54*dpcm === dpi && 96*dppx === dpi && 96*dppx/2.54 === dpcm;
  }});

  aok({id:'erraticInput', test:function() {
    var a = [], o = {}, x = NaN;
    if (res.dpi(x) || res.dpcm(x) || res.dppx(x)) return false;
    return res.dpi(a) === res.dppx(a) && res.dppx(o) === res.dpcm(o);
  }});
}(this, 'res');