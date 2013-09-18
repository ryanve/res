/*!
 * res 0.1.0+201309181754
 * https://github.com/ryanve/res
 * MIT License 2013 Ryan Van Etten
 */

(function(root, name, make) {
    typeof module != 'undefined' && module['exports'] ? module['exports'] = make() : root[name] = make();
}(this, 'res', function() {

    // w3.org/TR/css3-values/#absolute-lengths
    // w3.org/TR/css3-values/#resolution

    var win = typeof window != 'undefined' && window
      , matchMedia = win['matchMedia'] || win['msMatchMedia']
      , mq = matchMedia ? function(q) {
            return !!matchMedia.call(win, q)['matches'];
        } : function() {
            return false;
        }
      , winDppx = win['devicePixelRatio'] // Webkit (Chrome/Android/Safari), Opera (Presto 2.8+), FF 18+
      , useDppx = (winDppx = 0 < winDppx ? +winDppx : 0) ? winDppx : matchMedia ? (function(test) {
            // Fallback approximator runs once and memoizes
            for (var approx, n = 41; n--;)
                if (test(approx = n/20)) break;
            return approx;
        }(dppx)) : 0
      , pxPerIn = 96
      , pxPerCm = 2.54/pxPerIn;
    
    
    /**
     * Get or test resolution in "dppx" units. (a.k.a. device-pixel-ratio)
     * @param  {number=} min  optional minimum value to test for
     * @return {number|boolean}
     */
    function dppx(min) {
        if (null == min) return useDppx;
        if (min !== min) return false;
        if (winDppx) return winDppx >= min;
        // Match via dpi because it has older browser support than dppx
        // browserstack.com/screenshots/01d2869b789e45a61ee9225bdab15039cb6e4d71
        return mq('(min-resolution:' + min*pxPerIn + 'dpi)');
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