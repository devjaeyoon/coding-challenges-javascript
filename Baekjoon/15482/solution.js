const [str1, str2] = require('fs')
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split('\n');

const len1 = str1.length;
const len2 = str2.length;

const dp = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

for (let i = 1; i <= len1; i++) {
  for (let j = 1; j <= len2; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

console.log(dp[len1][len2]);
