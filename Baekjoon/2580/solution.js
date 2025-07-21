const board = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

const blanks = [];
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (board[i][j] === 0) {
      blanks.push([i, j]);
    }
  }
}

function isValid(x, y, num) {
  for (let i = 0; i < 9; i++) {
    if (board[x][i] === num) {
      return false;
    }
  }

  for (let i = 0; i < 9; i++) {
    if (board[i][y] === num) {
      return false;
    }
  }

  const startRow = Math.floor(x / 3) * 3;
  const startCol = Math.floor(y / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === num) {
        return false;
      }
    }
  }

  return true;
}

let isSolved = false;

function solve(depth = 0) {
  if (isSolved) {
    return;
  }

  if (depth === blanks.length) {
    console.log(board.map((row) => row.join(' ')).join('\n'));
    isSolved = true;

    return;
  }

  const [x, y] = blanks[depth];
  for (let num = 1; num <= 9; num++) {
    if (isValid(x, y, num)) {
      board[x][y] = num;
      solve(depth + 1);
      board[x][y] = 0;
    }
  }
}

solve();
