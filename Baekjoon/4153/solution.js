const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length; i++) {
  const [a, b, c] = input[i]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  if (a === 0 && b === 0 && c === 0) break;

  if (a ** 2 + b ** 2 === c ** 2) {
    console.log('right');
  }
  if (a ** 2 + b ** 2 !== c ** 2) {
    console.log('wrong');
  }
}
