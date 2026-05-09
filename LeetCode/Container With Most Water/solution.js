/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxAreaResult = 0;

  while (left < right) {
    const currentWidth = right - left;
    const currentHeight = Math.min(height[left], height[right]);
    const currentArea = currentWidth * currentHeight;

    maxAreaResult = Math.max(maxAreaResult, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxAreaResult;
};
