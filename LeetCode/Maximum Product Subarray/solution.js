/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0];
  let min = nums[0];
  let answer = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (num < 0) {
      [max, min] = [min, max];
    }

    max = Math.max(num, max * num);
    min = Math.min(num, min * num);

    answer = Math.max(answer, max);
  }

  return answer;
};
