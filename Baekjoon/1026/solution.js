const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const integerNumbersA = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const integerNumbersB = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += integerNumbersA[i] * integerNumbersB[i];
}

console.log(sum);
