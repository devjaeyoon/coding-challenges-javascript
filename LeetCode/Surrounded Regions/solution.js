/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const m = board.length;
  const n = board[0].length;

  const dfs = (row, col) => {
    if (row < 0 || row >= m || col < 0 || col >= n || board[row][col] !== 'O') {
      return;
    }

    board[row][col] = '#';

    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  };

  for (let row = 0; row < m; row++) {
    dfs(row, 0);
    dfs(row, n - 1);
  }

  for (let col = 0; col < n; col++) {
    dfs(0, col);
    dfs(m - 1, col);
  }

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (board[row][col] === 'O') {
        board[row][col] = 'X';
      } else if (board[row][col] === '#') {
        board[row][col] = 'O';
      }
    }
  }
};
