const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const str = input[0];
const order = Number(input[1]);

console.log(str[order - 1]);
