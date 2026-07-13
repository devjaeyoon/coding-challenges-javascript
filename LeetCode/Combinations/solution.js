/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];

  const backtrack = (start, currentCombination) => {
    if (currentCombination.length === k) {
      result.push([...currentCombination]);
      return;
    }

    for (let i = start; i <= n; i++) {
      currentCombination.push(i);
      backtrack(i + 1, currentCombination);
      currentCombination.pop();
    }
  };

  backtrack(1, []);

  return result;
};
