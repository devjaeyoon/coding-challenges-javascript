const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input.shift());
const triangle = input.map((row) => row.split(' ').map(Number));
let dp = triangle[n - 1].slice();

for (let i = n - 2; i >= 0; i--) {
  for (let j = 0; j <= i; j++) {
    dp[j] = triangle[i][j] + Math.max(dp[j], dp[j + 1]);
  }
}

console.log(dp[0]);
