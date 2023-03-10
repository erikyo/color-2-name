# color-2-name

<div>
  <a href="https://www.npmjs.com/package/color-2-name">
    <img alt="version" src="https://img.shields.io/npm/v/color-2-name.svg?label=npm%20version" />
  </a>
  <a href="https://github.com/erikyo/color-2-name/blob/main/LICENSE">
    <img alt="version" src="https://img.shields.io/npm/l/color-2-name" />
  </a>
  <a href="https://github.com/erikyo/color-2-name/actions">
    <img alt="build" src="https://img.shields.io/github/actions/workflow/status/erikyo/color-2-name/node.js.yml" />
  </a>
  <a href="https://github.com/erikyo/color-2-name/actions">
    <img alt="workflows" src="https://github.com/erikyo/color-2-name/actions/workflows/node.js.yml/badge.svg" />
  </a>
</div>

Find the name of the color given a hex, rgb and hsl string!

This package provides a function to find the closest color within an array of colors.
It uses the Euclidean distance formula to calculate the distance between colors in the RGB color space.

### Features:

- ð **Fast** - The distance between colors in the RGB color space is provided with the fastest algorithm available
- ð **Ally** - So that your app is equally useful for everyone
- ð **Well Documented** - Checkout the [documentation](https://erikyo.github.io/color-2-name/) with examples, demo and code references
- ðŠķ **Lightweight** - The module WITH the 140 css colors definitions weights 4kb gzipped!
- â **Umd module** - Works with browsers and with nodejs
- ðĶ **Bundled** - Webpack optimized and minified build!
- ðŠ **Easy to use** - You don't need to convert the color before calling the function! the color format will be found automatically
- ðĻ **Build your scheme** - You can use the node script to build your scheme
- ðŠïļ **Typed** - Written in typescript (with types included)
- ðĄïļïļ **Tested** - Tested (with 100% of coverage)
- ð **No dependencies** - Dependencies tend to have dependencies endlessly and this can lead to security issues. This is a small module, and it doesn't need anything else!

## Installation

### As a Node module

To install the package, run the following command:

```
npm install color-2-name
```

Import the `closest` function from the color-2-name package:

```js
// NodeJS / ES6 import
import {closest, distance, rgbToHex} from 'color-2-name';
closest('hsla(210deg 10% 96%)') // white

// OR with require
var color2Name = require("color-2-name")
color2Name.closest('#abcdef')
```

### As script (browser)

To load color-2-name add the script tag like below in your head/footer:

```js
<script src="https://cdn.jsdelivr.net/npm/color-2-name/dist/color-2-name.js"></script>
<script>
    // Then the color-2-name module will be available using the following command:
    // You will find the packed script loaded into window.color2name
    color2name.closest('#123456') // returns "name" : "midnightblue" , "color" : "rgb(25,25,112)"
</script>
```
---

This Package includes the following functions:

- [closest()](#closest)
- [distance()](#distance)
- [rgbToHex()](#rgbToHex)
- [isLight()](#isLight)
- [isDark()](#isDark)
- [isLightOrDark()](#isLightOrDark)
- [closestRGB()](#closestRGB)

### ðĄclosest()

Returns the closest color name

```js
// Here is an example of how to use the findClosestColor function:
const closestColor = closest('#ff8800');
console.log(closestColor); // { name: 'red', color: 'rgb(255,0,0)' }

// You can also use your custom set as comparation
return closest('#ff8800', [
  [255, 0, 0, 'red'],
  [0, 255, 0, 'green']
]); // -> { name: 'red', color: 'rgb(255,0,0)' }

// Alternatively you can also get the closest color in different color spaces in the following way:
return closest('#ff00ff', undefined, {info: true});
// {
//    name: 'magenta',
//    color: 'rgb(255,0,255),
//    hex: '#ff00ff',
//    hsl: 'hsl(300deg 100% 50%)',
//    distance: 0
// }
```

In this example, the hex color '#ff8800' (which is a shade of orange) is compared to the colors in the colors array. The function returns the object with the name and hex value of the color that is closest to it, which in this case is the
object for the color red.

Arguments:

- `color`: a string representing a color, accepts hexadecimal, rgb and hsl with and without alpha channel (e.g. `#ff0000` for hex red).
- `colors`: (optional) you can provide to this function a custom list of color names to be used (replaces the default)
- `args`: (optional) an Object that contains setup for this module
- `args.info`: (optional) set to true to display additional information the found color, like the hex value and the distance from the original

**RETURNS** an object with the name and nearest color that is closest to the given color. (eg. `{ name: 'red', color: 'rgb(255,0,0)' }`)

---

#### ðĄdistance()

Computes the distance between two colors using the euclidean distance formula.

```js
// Here is an example on how get the distance between two colors
const colorDivergence = distance([120, 255, 200], [255, 255, 255])
console.log(colorDivergence); // 123.465
```

Arguments:

- `rgb1`: an array of values representing rgb of the first color to be compared
- `rgb2`: an array of values representing rgb of the second color to be compared

**RETURNS** the distance between two colors, the maximum distance is >441 and the color is exactly the same when the value is 0

---

#### rgbToHex

Convert a rgb color into hexadecimal color

```js
// note: the rgb value is converted without take into account the alpha channel
const hex = rgbToHex('rgb(255,255,255)')
const hex2 = rgbToHex('rgb(255 255 255 / .5)')
// prints the hex result
console.log(hex); // #FFFFFF
console.log(hex2); // #FFFFFF
```

Arguments:

- `rgb`: a valid css rgb or rgba value (eg. rgb(1,2,3))

**RETURNS** the hex value of the color

---

#### ðĄgetColor()

search into ColorSet for the given color

```js
// note: the rgb value is converted without take into account the alpha channel
const white = getColor('white') // {"hex": "#ffffff", "hsl": "hsl(0,0%,100%)", "rgb": "rgb(255,255,255)"}
const alertColor = getColor('red') // {"hex": "#ff0000", "hsl": "hsl(0,100%,50%)", "rgb": "rgb(255,0,0)"}

// prints the hex result
console.log(alertColor.hsl); // #FFFFFF
console.log(alertColor.hex); // #FF0000
console.log("transparent red: " + alertColor.hex + "88"); // #FF000088
```

Arguments:

- `colorName`: the name of a color you need find in the colorset

**RETURNS** an Object with the color requested converted into hex, rgb and hsl

---

### Useful (additional) functions

#### ðĄisLight()

Check if the color is light (optically closer to white)

#### ðĄisDark()

Check if the color is dark (optically closer to black)

#### ðĄisLightOrDark()

Returns light or dark whether the color is lighter or darker

#### ðĄclosestRGB()

returns the closest RGB color

Arguments:

- `color`: a valid css color string

Examples:

```js
// note: the rgb value is converted without take into account the alpha channel
isLight('#fff') // true
isDark('#fff') // false
isLightOrDark('#abc') // light
isLightOrDark('#345') // dark
closestRGB('#FF1234') // red
```

---

#### ðĄBuild your own color set

First thing, clone the color-2-name package with `git clone https://github.com/erikyo/color-2-name.git` then cd into color-2-name folder.

In order to build a color set you need a json object with the following properties:
- `name` - the name of the color (like "Orange")
- `color` - the hex color value (like #FFAA00)

save it into ./src/data/ as "myNewColorSet.json". the file will contain something like this:

```json
[
    { "name": "white", "color": "#FFFFFF" },
    { "name": "black", "color": "#000000" },
    { "name": "red", "color": "#FF0000" },
    { "name": "green", "color": "#008000" },
    { "name": "blue", "color": "#0000FF" }
]
```

```bash
# then run the following command
$ node colorSetUtils.mjs myNewColorSet
```

**RETURNS** A new file called "myNewColorSet.ts" containing the data for this module will be written inside the ./src/data/ folder

---

### Examples

This module is meant to be used in conjunction with React's color picker, so that the color name is shown as you select it. It can also be used in other ways of course, such as to determine whether a color is light or dark (using a custom
color set with black and white) etc.

![picker](https://user-images.githubusercontent.com/8550908/209803600-81954bea-63a0-4951-ac4c-a965a9d93bca.gif)

### Limitations

This package uses the Euclidean distance formula to calculate the distance between colors in the RGB color space. While this is a simple and widely used method for comparing colors, it may not always give the most accurate results. In
particular, it does not take into account the perception of colors by the human eye, which can be affected by factors such as the surrounding colors and the luminance of the colors.

### Contributing

If you would like to contribute to this package, please follow the guidelines in the CONTRIBUTING.md file.

### License

This package is licensed under the MIT License. See the LICENSE file for details.

### Credits

The wiki about the euclidean distance formula https://en.wikipedia.org/wiki/Color_difference

Some useful ideas and codes has been taken from the article on the website css-tricks at https://css-tricks.com/converting-color-spaces-in-javascript/
