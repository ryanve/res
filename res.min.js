/*!
 * res 0.2.0+201405142025
 * https://github.com/ryanve/res
 * MIT License, 2014 Ryan Van Etten
 */
!function(a,b,c){"undefined"!=typeof module&&module.exports?module.exports=c(require):a[b]=c(function(b){return a[b]})}(this,"res",function(a){function b(b){return a("actual")("resolution",b.valueOf(),d[b])}function c(){return"undefined"==typeof window?0:+window.devicePixelRatio||Math.sqrt(screen.deviceXDPI*screen.deviceYDPI)/d.dpi||0}var d={dppx:1,dpi:96,dpcm:96/2.54};return!function(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c)}(d,function(a){b[a]=function(){return c()*d[a]}}),b});