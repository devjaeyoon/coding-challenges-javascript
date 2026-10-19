/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  const dfs = (row, col) => {
    if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] === '0') {
      return;
    }

    grid[row][col] = '0';

    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  };

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === '1') {
        count++;
        dfs(row, col);
      }
    }
  }

  return count;
};
