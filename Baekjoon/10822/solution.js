const S = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(',')
  .map(Number);

console.log(S.reduce((acc, cur) => acc + cur, 0));
