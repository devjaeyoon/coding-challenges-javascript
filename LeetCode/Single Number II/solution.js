/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let once = 0;
  let twice = 0;

  for (const num of nums) {
    once = (once ^ num) & ~twice;
    twice = (twice ^ num) & ~once;
  }

  return once;
};
