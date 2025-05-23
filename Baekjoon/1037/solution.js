const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const divisors = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(divisors[0] * divisors[N - 1]);
