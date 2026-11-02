/**
 * @param {string} s
 * @return {string}
 */

var shortestPalindrome = function (s) {
  const reversed = s.split('').reverse().join('');
  const combined = s + '#' + reversed;
  const lps = new Array(combined.length).fill(0);

  for (let i = 1, len = 0; i < combined.length; ) {
    if (combined[i] === combined[len]) {
      lps[i++] = ++len;
    } else if (len > 0) {
      len = lps[len - 1];
    } else {
      lps[i++] = 0;
    }
  }

  const palindromeLength = lps[combined.length - 1];
  const prefix = s.slice(palindromeLength);

  return prefix.split('').reverse().join('') + s;
};
