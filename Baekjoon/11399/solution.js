const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const times = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let cumulativeTime = 0;

const result = times.reduce((acc, cur) => {
  cumulativeTime += cur;
  return acc + cumulativeTime;
}, 0);

console.log(result);
