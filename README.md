# [res](../../)
#### <b>res</b> is a cross-browser [device resolution](http://ryanve.com/lab/resolution/) detection <a href="https://npmjs.org/package/res">module</a>. It uses `window.devicePixelRatio` where available and otherwise uses fallback techniques.

```sh
$ npm install res
```

## API

### <span id="api_methods">Methods</span>

#### @return `number`|`boolean`

- `res.dpi(min?)` - Get or test resolution in [dpi](http://www.w3.org/TR/css3-values/#dpi) units.
- `res.dpcm(min?)` - Get or test resolution in [dpcm](http://www.w3.org/TR/css3-values/#dpcm) units.
- `res.dppx(min?)` - Get or test resolution in [dppx](http://www.w3.org/TR/css3-values/#dppx) units <b>a.k.a.</b> device-pixel-ratio.

### <span id="usage">Usage</span>

#### Examples

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
    // Resolution is 120dpi+
} else {
    // Resolution is <120dpi
}
```

## Developers

### Contribute

Make edits in the [`/src`](./src) dir.

```
$ npm install
$ grunt jshint:src
```

## Compatibility

Methods return `0`|`false` where undetectable. Expect accurate results in:

- Webkit (Chrome/Safari/Android)
- Firefox 6+
- Opera 11.1+ (Presto 2.8+)
- IE 6+

## [MIT License](http://opensource.org/licenses/MIT)

Copyright (C) 2013 by [Ryan Van Etten](https://github.com/ryanve)