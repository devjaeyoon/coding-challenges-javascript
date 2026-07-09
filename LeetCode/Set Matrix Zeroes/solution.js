/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let isCol0Zero = false;

  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      isCol0Zero = true;
    }
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }

  if (isCol0Zero) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }
};
