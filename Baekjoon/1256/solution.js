const [N, M, K] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(n, m, k) {
  const MAX_K = 1000000001;
  const totalLength = n + m;

  const dp = Array.from({ length: totalLength + 1 }, () =>
    Array(totalLength + 1).fill(0)
  );

  for (let i = 0; i <= totalLength; i++) {
    dp[i][0] = 1;
    dp[i][i] = 1;
  }

  for (let i = 2; i <= totalLength; i++) {
    for (let j = 1; j < i; j++) {
      const combination = dp[i - 1][j - 1] + dp[i - 1][j];

      dp[i][j] = combination > MAX_K ? MAX_K : combination;
    }
  }

  const totalCombinations = dp[totalLength][n];
  if (totalCombinations < k) {
    return -1;
  }

  let result = '';
  let currentN = n;
  let currentM = m;
  let currentK = k;

  for (let i = 0; i < totalLength; i++) {
    if (currentN > 0) {
      const skipCount = dp[currentN - 1 + currentM][currentN - 1];

      if (currentK <= skipCount) {
        result += 'a';
        currentN -= 1;
      } else {
        result += 'z';
        currentM -= 1;
        currentK -= skipCount;
      }
    } else {
      result += 'z';
      currentM--;
    }
  }

  return result;
}

const answer = solution(N, M, K);
console.log(answer);
