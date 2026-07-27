/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s === null || s.length === 0 || s[0] === '0') {
    return 0;
  }

  let prev2 = 1;
  let prev1 = 1;

  for (let i = 1; i < s.length; i++) {
    let current = 0;

    if (s[i] !== '0') {
      current += prev1;
    }

    let twoDigit = parseInt(s.substring(i - 1, i + 1), 10);
    if (twoDigit >= 10 && twoDigit <= 26) {
      current += prev2;
    }

    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
};
