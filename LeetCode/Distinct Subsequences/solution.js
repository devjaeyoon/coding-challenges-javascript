/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const dp = Array(t.length + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= s.length; i++) {
    for (let j = t.length; j >= 1; j--) {
      if (s[i - 1] === t[j - 1]) {
        dp[j] += dp[j - 1];
      }
    }
  }

  return dp[t.length];
};
