/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];

  function dfs(index, currentSubset) {
    result.push([...currentSubset]);

    for (let i = index; i < nums.length; i++) {
      currentSubset.push(nums[i]);

      dfs(i + 1, currentSubset);

      currentSubset.pop();
    }
  }

  dfs(0, []);

  return result;
};
