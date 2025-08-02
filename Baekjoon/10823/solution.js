const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .replaceAll('\n', '')
  .split(',');

console.log(input.reduce((acc, cur) => acc + Number(cur), 0));
