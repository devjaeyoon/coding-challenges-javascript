/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];

  candidates.sort((a, b) => a - b);

  function backtrack(remain, currentComb, start) {
    if (remain === 0) {
      result.push([...currentComb]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }

      if (candidates[i] > remain) {
        break;
      }

      currentComb.push(candidates[i]);

      backtrack(remain - candidates[i], currentComb, i + 1);

      currentComb.pop();
    }
  }

  backtrack(target, [], 0);

  return result;
};
