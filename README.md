# Typography Magic!

Getting Vertical Rhythm as never been so easy! Pass `typoRhythm( size )`  and it calculates the appropriate `font-size`, `line-height` in ems.

![alt tag](./demo/screenshot.png)


## Installing
Available on `npm`
```bash
$ npm install --S typorhythm
```

## Demo

See the Pen [TypoRhythm](http://codepen.io/monteirocode/pen/xbzwwx/) on [CodePen](http://codepen.io)
and the Inline JavaScript Version [TypoRhythm JS](http://codepen.io/monteirocode/pen/dGroev) on [CodePen](http://codepen.io)

## API

Parameters:
- `size` expects a `number` e.g. `14, 26, 47, 56`
- `padding` expects a `number` e.g. `0.5, 1, 2` * `base:24`
- `margin` expects a `number` e.g. `0.5, 1, 2` * `base:24`
- `line-height` expects a `number` e.g. `0.5, 1, 2` * `base:24`, should be left to `null`
- `unit` expect a `string` e.g. `em, rem`


## Using in JavaScript (React)

```js
import typoRhythm from 'typoRhythm'

class Hello extends React.Component {
  render() {
    return (
      <h1 style={ typoRhythm(size: 47, margin: 1) } > Hello World </h1>
    )
  }
}
```
Result
```js
{
  fontSize: "2.9375em",
  padding: null,
  marginBottom: "0.5106382978723404em",
  lineHeight: 1.0212765957446808
}
```

Change the default `base` or `fontsize`:
```js
import {TypoRhythm} from 'typoRhythm'

const typoRhythm = new TypoRhythm(14, 32)
```



## Using in Sass
Import typoRhythm in your project
```scss
@import 'typorhythm.scss';
```

Include it in your element
```scss
h3 {
  @include typoRhythm(21);
}
```

TypoRhythm will do the rhythmic math for you in `ems` and compile to css:
```css
h3 {
  font-size: 1.3125rem;
  line-height: 1.14286em;
}
```

Change the default `base` or `fontsize`:
```scss
$typorhythm_base: 24 !default;
$typorhythm_fontsize: 16 !default;
```

Example:
```scss
h3 {
  @include typoRhythm(21, $padding: 1, $margin: 2);
}
```
```css
h3 {
  font-size: 1.3125em;
  padding: 1.14286em;
  margin-bottom: 2.28571em;
  line-height: 1.14286;
}
```

## typoRhythmGenerator
Style multiple elements at once!

```scss
$sizeMap: ( h1:47, h2:34, h3:26, h4:21, h5:18, h6:16, p: 16, ul: 16 );

@include typoRhythmGenerator($sizeMap, $margin: 1);
```
```css
h1 {
  font-size: 2.9375rem;
  margin-bottom: 0.51064em;
  line-height: 1.02128;
}

h2 {
  font-size: 2.125rem;
  margin-bottom: 0.70588em;
  line-height: 1.41176;
}

h3 {
  font-size: 1.625rem;
  margin-bottom: 0.92308em;
  line-height: 1.84615;
}

/*
...
...
You get the gist!
*/
```

Keep the Rhythm going!
