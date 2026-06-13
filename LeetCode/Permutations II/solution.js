/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  const used = new Array(nums.length).fill(false);

  nums.sort((a, b) => a - b);

  const backtrack = function (currentPath) {
    if (currentPath.length === nums.length) {
      result.push([...currentPath]);

      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }

      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }

      used[i] = true;
      currentPath.push(nums[i]);

      backtrack(currentPath);

      currentPath.pop();
      used[i] = false;
    }
  };

  backtrack([]);

  return result;
};
