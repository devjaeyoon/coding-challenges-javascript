/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function isValid(board, row, col, char) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === char) {
      return false;
    }

    if (board[i][col] === char) {
      return false;
    }

    const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const boxCol = 3 * Math.floor(col / 3) + (i % 3);

    if (board[boxRow][boxCol] === char) {
      return false;
    }
  }

  return true;
}

var solveSudoku = function (board) {
  function solve(board) {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === '.') {
          for (let num = 1; num <= 9; num++) {
            const char = num.toString();

            if (isValid(board, r, c, char)) {
              board[r][c] = char;

              if (solve(board)) {
                return true;
              }

              board[r][c] = '.';
            }
          }

          return false;
        }
      }
    }

    return true;
  }

  solve(board);
};
