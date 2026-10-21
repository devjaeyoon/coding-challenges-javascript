/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const getNext = function (num) {
    let sum = 0;

    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }

    return sum;
  };

  const seen = new Set();

  while (n !== 1) {
    if (seen.has(n)) {
      return false;
    }

    seen.add(n);
    n = getNext(n);
  }

  return true;
};
