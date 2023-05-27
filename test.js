const color = require('./index');
const colors = [
	'black',
	'red',
	'green',
	'yellow',
	'blue',
	'magenta',
	'cyan',
	'white'
];

const modifiers = [
	'reset',
	'bold',
	'dim',
	'italic',
	'underline',
	'blink',
	'reverse',
	'strike'
]

const styles = [
	...colors,
	...colors.map(c => `${c}Bg`),
	...colors.map(c => `${c}BrBg`),
	...colors.map(c => `${c}Br`),
	...modifiers
]

console.log(styles.length, 'styles!');
for (const style of styles) {
	console.log(color[style](style))
}
