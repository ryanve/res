# [res](../../)
#### <b>res</b> is a cross-browser [device resolution](http://ryanve.com/lab/resolution/) detection <a href="https://npmjs.org/package/res">module</a>. It uses `devicePixelRatio` where available and otherwise uses fallback techniques.

## API

#### Methods
- [<b>res.dpi</b>(min?)](#dpi)
- [<b>res.dpcm</b>(min?)](#dpcm)
- [<b>res.dppx</b>(min?)](#dppx)

#### Parameters
- <var>min</var> is an option minimum resolution number to test for

<a name="dpi"></a>
#### `res.dpi()`
- Get resolution in [dpi](http://www.w3.org/TR/css3-values/#dpi)
- <b>@return</b> number

#### `res.dpi(min)`
- Test if resolution is at least <var>min</var> dpi
- <b>@return</b> boolean

<a name="dpcm"></a>
#### `res.dpcm()`
- Get resolution in [dpcm](http://www.w3.org/TR/css3-values/#dpcm)
- <b>@return</b> number

#### `res.dpcm(min)`
- Test if resolution is at least <var>min</var> dpcm
- <b>@return</b> boolean

<a name="dppx"></a>
#### `res.dppx()`
- Get resolution in [dppx](http://www.w3.org/TR/css3-values/#dppx)
- <b>@return</b> number

#### `res.dppx(min)`
- Test if resolution is at least <var>min</var> dppx
- <b>@return</b> boolean

## Usage
#### Example outputs
<table>
  <tr>
    <th scope="col">Device</th>
    <th scope="col"><code>res.ddpx()</code></th>
    <th scope="col"><code>res.dpi()</code></th>
    <th scope="col"><code>res.dpcm()</code></th>
  </tr>
  <tr>
    <td>desktop</td>
    <td>1</td>
    <td>96</td>
    <td>37.79527559055118</td>
  </tr>
  <tr>
    <td>iPhone 4s</td>
    <td>2</td>
    <td>192</td>
    <td>75.59055118110236</td>
  </tr>
</table>

#### Conditionals

```js
if (res.dpi(120)) {
  console.log('Resolution is 120dpi+')
} else {
  console.log('Resolution is <120dpi')
}
```

## Compatibility
#### Browsers with detectable resolution

- Webkit (Chrome/Safari/Android)
- Firefox 6+
- Opera 11.1+ (Presto 2.8+)
- IE 6+

**Methods return `0`|`false` where undetectable.**

## Related resources
- [Resolution lab](http://ryanve.com/lab/resolution/)
- [actual](https://github.com/ryanve/actual)

## License
[MIT](res.js#L4)