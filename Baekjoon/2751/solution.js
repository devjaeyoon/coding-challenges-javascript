const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const numbers = input.slice(1);

numbers.sort((a, b) => a - b);

console.log(numbers.join('\n'));
