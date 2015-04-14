# TypoRhythm
*Sass mixin for defining Typographic Rhythm*

A basic foundation of design is Typographic Rythm − This mixin makes it a piece of cake! All you have to do is @include typoRythem in your element, pass a familiar Pixel Font Size* and it calculates a appropriate the line-height, margin-bottom* and padding* in Ems to keep your text nice and neat in a consistant 24px Base Grid*, with less repeated code and micro styling throughout your projects.

## Why?
- Familiar pixel sizes without compromise
- Semantic font-size, margin-bottom and padding with just one line
- Making your text responsive as never been so easy!

## Demo
Check the demo on codepen!
http://codepen.io/monteirocode/pen/xbzwwx

## Using it
First import typoRhythm in your project.
```
@import 'typoRhythm';
```

Start using it!
```
example { 
	@include typoRhythm(21);
}
```

TypoRhythm will do all the rhythmic math for you in Ems and complile to css:
```
.example {
	font-size: 1.3125em;
	margin-bottom: 1.14286em;
	line-height: 1.14286em;
}
```

Further customize your elements
```
.example { 
	@include typoRhythm(21, $padding: 1, $margin: 2);
}
```
Pixel font size* - If no size is defined 16px (1em) will be the default size
Margin and Padding - Can be increased in using $margin: 3 ( margin-bottom = 3 x 24 ) and $padding 2 ( padding = 2 x 24 )
24px Base* - the base size can be change but it's recommended to use multiples of 24 for a semantic look (24, 48, 72...)
```
.example {
  font-size: 1.3125em;
  padding: 1.14286em;
  margin-bottom: 2.28571em;
  line-height: 1.14286;
}
```

Set all your element default font sizes at once with Sass Maps
```
$default-font-sizes: (h1:47, h2:34, h3:26, h4:21, h5:18, h6:16, p: 16, ul: 16);
@include typoRhythm-default;
```
```
h1 {
  font-size: 2.9375em;
  margin-bottom: 0.51064em;
  line-height: 1.02128em;
}

h2 {
  font-size: 2.125em;
  margin-bottom: 0.70588em;
  line-height: 1.41176em;
}

h3 {
  font-size: 1.625em;
  margin-bottom: 0.92308em;
  line-height: 1.84615em;
}

...

You get the point.
```
