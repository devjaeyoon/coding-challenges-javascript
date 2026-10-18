/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let prev2 = 0;
  let prev1 = 0;

  for (const num of nums) {
    const current = Math.max(prev1, prev2 + num);
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
};
