/*!
 * res 0.1.2+201309260415
 * https://github.com/ryanve/res
 * MIT License 2013 Ryan Van Etten
 */

(function(root, name, make) {
    typeof module != 'undefined' && module['exports'] ? module['exports'] = make() : root[name] = make();
}(this, 'res', function() {

    // airve.com/mq/#mq-resolution
    // dev.w3.org/csswg/mediaqueries4/#resolution
    // w3.org/TR/css3-values/#absolute-lengths
    // w3.org/TR/css3-values/#resolution

    var pxPerIn = 96
      , pxPerCm = 2.54/pxPerIn
      , win = typeof window != 'undefined' && window
      , scr = typeof screen != 'undefined' && screen
      , join = [].join
      , matchMedia = win['matchMedia']
      , hasFeature = matchMedia ? function() {
            return !!matchMedia.call(win, '(' + join.call(arguments, '') + ')')['matches'];
        } : function() {
            return false;
        }
      , someApply = function(stack, fn, scope) {
            for (var i = 0, l = stack.length; i < l;)
                if (fn.apply(scope, stack[i++])) return true;
            return false;
        }
        // Browser support
        // - devicePixelRatio: Webkit (Chrome/Android/Safari), Opera (Presto 2.8+), FF 18+
        // - logicalXDPI/logicalYDPI: IE6+
        // The fallback may be overkill. Assuming `1` when unavail. would probably suffice.
      , winDppx = +win['devicePixelRatio'] || Math.sqrt(scr['logicalXDPI']*scr['logicalYDPI'])/pxPerIn || 0
      , useDppx = winDppx || !matchMedia ? winDppx : (function(test) {
            for (var approx, n = 41; n--;)
                if (test(approx = n/20)) break;
            return approx;
        }(dppx));
    
    /**
     * Get or test resolution in "dppx" units. (a.k.a. device-pixel-ratio)
     * @param  {number=} min  optional minimum value to test for
     * @return {number|boolean}
     */
    function dppx(min) {
        if (null == min) return useDppx;
        if (min !== min) return false;
        if (winDppx) return winDppx >= min;
        return someApply([
            ['min--moz-device-pixel-ratio:', min] // Use for FF 15- (See FF 16/18 release notes)
          , ['min-resolution:', min*pxPerIn, 'dpi'] // dpi queries are older than dppx
        ], hasFeature);
    }

    /**
     * Get or test resolution in "dpi" units.
     * @param  {number=} min  optional minimum value to test for
     * @return {number|boolean}
     */
    function dpi(min) {
        return null == min ? dppx()*pxPerIn : dppx(min/pxPerIn);
    }

    /**
     * Get or test resolution in "dpcm" units.
     * @param  {number=} min  optional minimum value to test for
     * @return {number|boolean}
     */
    function dpcm(min) {
        return null == min ? dppx()/pxPerCm : dppx(min*pxPerCm);
    }

    return {'dppx':dppx, 'dpcm':dpcm, 'dpi':dpi};
}));