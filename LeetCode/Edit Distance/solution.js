/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const word1Length = word1.length;
  const word2Length = word2.length;

  const dp = Array.from({ length: word1Length + 1 }, () =>
    Array(word2Length + 1).fill(0),
  );

  for (let i = 0; i <= word1Length; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= word2Length; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= word1Length; i++) {
    for (let j = 1; j <= word2Length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[word1Length][word2Length];
};
