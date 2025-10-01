const [a, b, d, N] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const dp = new Array(N + 1).fill(0);

dp[0] = 1;

for (let i = 1; i <= N; i++) {
  const cumulativeUntilA = i - a >= 0 ? dp[i - a] : 0;
  const cumulativeUntilB = i - b >= 0 ? dp[i - b] : 0;

  const newlyBorn = (cumulativeUntilA - cumulativeUntilB + 1000) % 1000;

  dp[i] = (dp[i - 1] + newlyBorn) % 1000;
}

const totalBorn = dp[N];
const totalDied = N - d >= 0 ? dp[N - d] : 0;

const result = (totalBorn - totalDied + 1000) % 1000;

console.log(result);
