/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  const dfs = (r, c, index) => {
    if (index === word.length) {
      return true;
    }

    if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== word[index]) {
      return false;
    }

    const temp = board[r][c];
    board[r][c] = '*';

    const found =
      dfs(r - 1, c, index + 1) ||
      dfs(r + 1, c, index + 1) ||
      dfs(r, c - 1, index + 1) ||
      dfs(r, c + 1, index + 1);

    board[r][c] = temp;

    return found;
  };

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === word[0] && dfs(r, c, 0)) {
        return true;
      }
    }
  }

  return false;
};
