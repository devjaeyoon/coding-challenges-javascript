/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let maxLength = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let current = num;
      let length = 1;

      while (numSet.has(current + 1)) {
        current++;
        length++;
      }

      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength;
};
