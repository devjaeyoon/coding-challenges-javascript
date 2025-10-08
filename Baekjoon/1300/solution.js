const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const k = Number(input.shift());

let left = 1;
let right = k;
let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  let count = 0;

  for (let i = 1; i <= N; i++) {
    count += Math.min(N, Math.floor(mid / i));
  }

  if (count >= k) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
