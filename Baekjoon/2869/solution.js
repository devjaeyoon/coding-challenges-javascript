const [A, B, V] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(Math.ceil((V - B) / (A - B)));
