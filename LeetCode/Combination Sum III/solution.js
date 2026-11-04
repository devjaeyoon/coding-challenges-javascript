/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = [];
  const path = [];

  const backtrack = function (start, sum) {
    if (path.length === k) {
      if (sum === n) {
        result.push([...path]);
      }

      return;
    }

    if (sum >= n) {
      return;
    }

    for (let num = start; num <= 9; num++) {
      if (sum + num > n) {
        break;
      }

      path.push(num);
      backtrack(num + 1, sum + num);
      path.pop();
    }
  };

  backtrack(1, 0);

  return result;
};
