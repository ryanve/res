# res
#### [CSS resolution](http://www.w3.org/TR/css3-values/#resolution) detection in JavaScript

## API
<a name="methods"></a>

<a name="dpi"></a>
#### `res.dpi()`
<b>@return</b> `number` resolution in [dpi](http://www.w3.org/TR/css3-values/#dpi)

<a name="dpcm"></a>
#### `res.dpcm()`
<b>@return</b> `number` resolution in [dpcm](http://www.w3.org/TR/css3-values/#dpcm)

<a name="dppx"></a>
#### `res.dppx()`
<b>@return</b> `number` resolution in [dppx](http://www.w3.org/TR/css3-values/#dppx)

## Usage

```js
var res = require('res')
res.dppx() // 1
res.dpi() // 96
res.dpcm() // 37.79527559055118
```

### Technical notes
- [dppx](http://www.w3.org/TR/css3-values/#dppx) equals [`devicePixelRatio`](http://dev.w3.org/csswg/cssom-view/#dom-window-devicepixelratio)
- <b>dppx</b> is the preferred resolution unit for web design
- [User zoom affects resolution](../../issues/1)

### Use with care
<b>res</b> was mainly written for [investigative](http://ryanve.com/lab/resolution/) purposes. Making [retina](../../issues/2#issuecomment-41459302) design accommodations can be impractical. Consider alternatives to resolution detection.

### Example outputs
<table>
  <tr>
    <th scope="col">Device</th>
    <th scope="col"><code>res.ddpx()</code></th>
    <th scope="col"><code>res.dpi()</code></th>
    <th scope="col"><code>res.dpcm()</code></th>
  </tr>
  <tr>
    <td>desktop at default zoom</td>
    <td>1</td>
    <td>96</td>
    <td>37.79527559055118</td>
  </tr>
  <tr>
    <td>iPhone 4s at default zoom</td>
    <td>2</td>
    <td>192</td>
    <td>75.59055118110236</td>
  </tr>
</table>

## Compatibility
#### Browsers with resolution detectable by [res](#res)

- Webkit (Chrome/Safari/Android)
- Firefox 18+
- Opera 11.1+ (Presto 2.8+)
- IE 6+

**Methods return `0` where undetectable.**

## Related resources
- [CSS4 resolution](http://dev.w3.org/csswg/mediaqueries4/#resolution)
- [CSS3 resolution](http://w3.org/TR/css3-values/#resolution) and [units](http://w3.org/TR/css3-values/#absolute-lengths)
- [Resolution lab](http://ryanve.com/lab/resolution/)
- [Demo media queries](http://ryanve.com/lab/@media/#mq-resolution)
- [ryanve/actual](https://github.com/ryanve/actual)

## License
MIT