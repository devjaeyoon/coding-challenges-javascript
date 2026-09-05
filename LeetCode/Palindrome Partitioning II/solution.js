/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const n = s.length;
  const palindrome = Array.from({ length: n }, () => Array(n).fill(false));

  for (let end = 0; end < n; end++) {
    for (let start = end; start >= 0; start--) {
      if (
        s[start] === s[end] &&
        (end - start <= 2 || palindrome[start + 1][end - 1])
      ) {
        palindrome[start][end] = true;
      }
    }
  }

  const dp = Array(n).fill(0);

  for (let end = 0; end < n; end++) {
    if (palindrome[0][end]) {
      dp[end] = 0;
      continue;
    }

    dp[end] = end;

    for (let start = 1; start <= end; start++) {
      if (palindrome[start][end]) {
        dp[end] = Math.min(dp[end], dp[start - 1] + 1);
      }
    }
  }

  return dp[n - 1];
};
