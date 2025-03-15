const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const stairCount = input[0];
const scores = [0, ...input.slice(1)];

const dp = Array(stairCount + 1).fill(0);
dp[1] = scores[1];

if (stairCount >= 2) {
  dp[2] = scores[1] + scores[2];
}

for (let i = 3; i <= stairCount; i++) {
  dp[i] = Math.max(dp[i - 2], dp[i - 3] + scores[i - 1]) + scores[i];
}

console.log(dp[stairCount]);
