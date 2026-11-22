/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let count = 0;

  for (let digit = 1; digit <= n; digit *= 10) {
    const high = Math.floor(n / (digit * 10));
    const current = Math.floor(n / digit) % 10;
    const low = n % digit;

    if (current === 0) {
      count += high * digit;
    } else if (current === 1) {
      count += high * digit + low + 1;
    } else {
      count += (high + 1) * digit;
    }
  }

  return count;
};
