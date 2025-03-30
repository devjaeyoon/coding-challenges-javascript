const input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const numbers = input[0].split(' ').map((str) => Number(str));
const dp = Array(N).fill(0);
dp[0] = 1;

for (let i = 0; i < N; i++) {
  let max = 0;

  for (let j = 0; j <= i; j++) {
    if (numbers[j] < numbers[i]) {
      max = Math.max(max, dp[j]);
    }
  }

  dp[i] = max + 1;
  console.log(dp);
}

console.log(Math.max(...dp));
