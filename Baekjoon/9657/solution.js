const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString();
const N = Number(input);

const dp = new Array(1001).fill(0);

dp[1] = 1;
dp[2] = 0;
dp[3] = 1;
dp[4] = 1;
dp[5] = 1;
dp[6] = 1;

for (let i = 7; i <= N; i++) {
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
