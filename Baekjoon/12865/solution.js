const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const items = input.map((line) => line.split(' ').map(Number));
const dp = Array(K + 1).fill(0);

for (let i = 0; i < N; i++) {
  const [W, V] = items[i];
  for (let j = K; j >= W; j--) {
    dp[j] = Math.max(dp[j], dp[j - W] + V);
  }
}

console.log(dp[K]);
