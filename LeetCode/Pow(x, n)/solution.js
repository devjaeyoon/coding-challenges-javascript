/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let power = Math.abs(n);
  let result = 1;
  let currentProduct = x;

  while (power > 0) {
    if (power % 2 === 1) {
      result *= currentProduct;
    }

    currentProduct *= currentProduct;
    power = Math.floor(power / 2);
  }

  return n < 0 ? 1 / result : result;
};
