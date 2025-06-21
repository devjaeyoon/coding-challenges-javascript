const numbers = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(',')
  .map(Number);

console.log(numbers.filter((number) => Number.isInteger(number)).length);
