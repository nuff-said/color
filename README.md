# [@nuff-said/color][repo-npm]

A compact and efficient terminal styling library that offers an impressive array
of **40 different styles**, all packed into a minzipped code size of just **227
bytes!** 10x smaller than the most popular alternative, chalk

```javascript
const color = require('@nuff-said/color');

console.log(color.redBr('Bright red!'))
console.log(color.blink(color.whiteBg(color.black('Black on white text which blinks!'))))
```

## Installation

```shell
$ npm i @nuff-said/color
```

## Colors

All 8 bit colors are supported:

- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white

The variants `bright`, `background`, and `background bright` can be applied by
suffixing the color name with `Br`, `Bg` or `BrBg` respectively.

The following modifiers are also supported:

- reset
- bold
- dim
- italic
- underline
- blink
- reverse
- strike

## Contributing

All contributions are welcome! Feel free to file an issue, point out an
optimization or even push a PR!

## License

This project uses the GPL-3.0 license.

[repo-npm]: https://npm.im/@nuff-said/color
