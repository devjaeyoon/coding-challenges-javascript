/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  const n = s.length;
  let i = 0;
  let sign = 1;
  let result = 0;

  while (i < n && s[i] === ' ') {
    i++;
  }

  if (i < n && (s[i] === '+' || s[i] === '-')) {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }

  while (i < n && s[i] >= '0' && s[i] <= '9') {
    result = result * 10 + (s[i] - '0');

    if (sign === 1 && result > INT_MAX) {
      return INT_MAX;
    }
    if (sign === -1 && result > 2147483648) {
      return INT_MIN;
    }

    i++;
  }

  return result * sign;
};
