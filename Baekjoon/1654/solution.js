const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [K, N] = input.shift().split(' ').map(Number);
const cables = input.map(Number);
let low = 1;
let high = Math.max(...cables);
let result = 0;

while (low <= high) {
  const mid = Math.floor((low + high) / 2);
  const count = cables.reduce((sum, len) => sum + Math.floor(len / mid), 0);

  if (count >= N) {
    result = mid;
    low = mid + 1;
  }
  if (count < N) {
    high = mid - 1;
  }
}

console.log(result);
