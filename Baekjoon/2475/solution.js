const [num1, num2, num3, num4, num5] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log((num1 ** 2 + num2 ** 2 + num3 ** 2 + num4 ** 2 + num5 ** 2) % 10);
