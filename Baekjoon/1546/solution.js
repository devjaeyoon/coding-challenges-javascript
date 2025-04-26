const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const numbers = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const highestScore = numbers[numbers.length - 1];

console.log(
  numbers.reduce((acc, cur) => acc + (cur / highestScore) * 100, 0) / N
);
