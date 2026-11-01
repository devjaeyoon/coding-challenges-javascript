/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const root = {};

  for (const word of words) {
    let node = root;

    for (const char of word) {
      if (!node[char]) {
        node[char] = {};
      }

      node = node[char];
    }

    node.word = word;
  }

  const result = [];
  const rows = board.length;
  const cols = board[0].length;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dfs = (row, col, parent) => {
    const char = board[row][col];
    const node = parent[char];

    if (!node) return;

    if (node.word) {
      result.push(node.word);
      node.word = null;
    }

    board[row][col] = '#';

    for (const [dr, dc] of directions) {
      const nextRow = row + dr;
      const nextCol = col + dc;

      if (
        nextRow < 0 ||
        nextRow >= rows ||
        nextCol < 0 ||
        nextCol >= cols ||
        board[nextRow][nextCol] === '#'
      ) {
        continue;
      }

      dfs(nextRow, nextCol, node);
    }

    board[row][col] = char;

    if (node.word === null && Object.keys(node).length === 0) {
      delete parent[char];
    }
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      dfs(row, col, root);
    }
  }

  return result;
};
