const [A, B, C] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(Number(A) + Number(B) - Number(C));
console.log(A + B - C);
