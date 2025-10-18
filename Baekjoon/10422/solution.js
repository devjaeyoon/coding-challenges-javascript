const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());
const testCases = input.map(Number);
const MOD = 1_000_000_007;
const MAX_N = 5000 / 2;
const dp = new Array(MAX_N + 1).fill(0);

dp[0] = 1;

for (let n = 1; n <= MAX_N; n++) {
  for (let i = 0; i < n; i++) {
    const term = (BigInt(dp[i]) * BigInt(dp[n - 1 - i])) % BigInt(MOD);
    dp[n] = (dp[n] + Number(term)) % MOD;
  }
}

const results = [];
for (const L of testCases) {
  if (L % 2 !== 0) {
    results.push(0);
  } else {
    const n = L / 2;
    results.push(dp[n]);
  }
}

console.log(results.join('\n'));
