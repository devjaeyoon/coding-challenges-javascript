const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString();
const N = Number(input);

const dp = new Array(1001).fill(0);

dp[1] = 0;
dp[2] = 1;
dp[3] = 0;
dp[4] = 1;

for (let i = 5; i <= N; i++) {
  if (dp[i - 1] === 0 || dp[i - 3] === 0 || dp[i - 4] === 0) {
    dp[i] = 1;
  } else {
    dp[i] = 0;
  }
}

if (dp[N] === 1) {
  console.log('SK');
} else {
  console.log('CY');
}
