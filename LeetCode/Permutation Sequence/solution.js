/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  const numbers = [];
  const factorials = [1];
  let result = '';

  for (let i = 1; i <= n; i++) {
    numbers.push(i);
    factorials[i] = factorials[i - 1] * i;
  }

  k--;

  for (let i = n; i > 0; i--) {
    const groupSize = factorials[i - 1];
    const index = Math.floor(k / groupSize);

    result += numbers[index];
    numbers.splice(index, 1);

    k %= groupSize;
  }

  return result;
};
