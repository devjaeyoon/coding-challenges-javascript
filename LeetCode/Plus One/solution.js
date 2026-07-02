/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const sum = BigInt(digits.join('')) + 1n;

  return String(sum).split('').map(Number);
};
