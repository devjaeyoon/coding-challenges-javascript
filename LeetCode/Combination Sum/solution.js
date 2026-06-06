/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  function backtrack(remain, currentComb, start) {
    if (remain === 0) {
      result.push([...currentComb]);
      return;
    }

    if (remain < 0) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      currentComb.push(candidates[i]);

      backtrack(remain - candidates[i], currentComb, i);

      currentComb.pop();
    }
  }

  backtrack(target, [], 0);

  return result;
};
