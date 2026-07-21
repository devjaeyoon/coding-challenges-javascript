/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;
  const heights = new Array(cols).fill(0);
  let maxArea = 0;

  const getLargestRectangleArea = (h) => {
    const stack = [];
    let max = 0;

    for (let i = 0; i <= h.length; i++) {
      const currentHeight = i === h.length ? 0 : h[i];

      while (stack.length > 0 && currentHeight < h[stack[stack.length - 1]]) {
        const height = h[stack.pop()];
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        max = Math.max(max, height * width);
      }
      stack.push(i);
    }

    return max;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === '1') {
        heights[j] += 1;
      } else {
        heights[j] = 0;
      }
    }
    maxArea = Math.max(maxArea, getLargestRectangleArea(heights));
  }

  return maxArea;
};
