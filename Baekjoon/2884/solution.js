const [H, M] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let totalMinute = H * 60 + M - 45;

if (totalMinute < 0) {
  totalMinute += 1440;
}

console.log(Math.floor(totalMinute / 60), totalMinute % 60);
