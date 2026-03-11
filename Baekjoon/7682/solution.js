const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

function checkWin(board, player) {
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of winLines) {
    if (
      board[line[0]] === player &&
      board[line[1]] === player &&
      board[line[2]] === player
    ) {
      return true;
    }
  }

  return false;
}

const output = [];

for (let i = 0; i < input.length; i++) {
  const board = input[i];

  if (board === 'end') {
    break;
  }

  let xCount = 0;
  let oCount = 0;
  for (let char of board) {
    if (char === 'X') {
      xCount++;
    }

    if (char === 'O') {
      oCount++;
    }
  }

  const xWin = checkWin(board, 'X');
  const oWin = checkWin(board, 'O');

  let isValid = false;

  if (xWin && !oWin && xCount === oCount + 1) {
    isValid = true;
  } else if (!xWin && oWin && xCount === oCount) {
    isValid = true;
  } else if (!xWin && !oWin && xCount === 5 && oCount === 4) {
    isValid = true;
  }

  output.push(isValid ? 'valid' : 'invalid');
}

console.log(output.join('\n'));
