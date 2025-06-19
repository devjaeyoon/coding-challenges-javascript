const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const levels = input[0].split(' ').map(Number);
let result = '';

for (let i = 0; i < N; i++) {
  if (levels[i] === 300) {
    result += '1 ';
  } else if (levels[i] < 300 && levels[i] >= 275) {
    result += '2 ';
  } else if (levels[i] < 275 && levels[i] >= 250) {
    result += '3 ';
  } else {
    result += '4 ';
  }
}

console.log(result.trim());
