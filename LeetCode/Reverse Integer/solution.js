/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;
  let result = 0;

  while (x !== 0) {
    let pop = x % 10;
    x = Math.trunc(x / 10);

    if (
      result > Math.trunc(INT_MAX / 10) ||
      (result === Math.trunc(INT_MAX / 10) && pop > 7)
    ) {
      return 0;
    }
    if (
      result < Math.trunc(INT_MIN / 10) ||
      (result === Math.trunc(INT_MIN / 10) && pop < -8)
    ) {
      return 0;
    }

    result = result * 10 + pop;
  }

  return result;
};
