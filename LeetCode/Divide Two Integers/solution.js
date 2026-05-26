/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;

  if (dividend === INT_MIN && divisor === -1) {
    return INT_MAX;
  }

  const isNegative = dividend < 0 !== divisor < 0;

  let a = dividend < 0 ? dividend : -dividend;
  let b = divisor < 0 ? divisor : -divisor;

  let quotient = 0;

  while (a <= b) {
    let temp = b;
    let multiple = -1;

    while (temp >= a - temp) {
      temp += temp;
      multiple += multiple;
    }

    a -= temp;
    quotient -= multiple;
  }

  return isNegative ? -quotient : quotient;
};
