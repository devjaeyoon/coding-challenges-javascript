/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const findBound = (isFirst) => {
    let left = 0;
    let right = nums.length - 1;
    let bound = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        bound = mid;
        if (isFirst) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return bound;
  };

  const firstPosition = findBound(true);

  if (firstPosition === -1) {
    return [-1, -1];
  }

  const lastPosition = findBound(false);

  return [firstPosition, lastPosition];
};
