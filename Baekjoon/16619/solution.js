const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [R, C, N] = input.shift().split(' ').map(Number);
const initial = input.map((line) => line.split(''));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

function getNext(board) {
  const result = Array.from({ length: R }, () => Array(C).fill('O'));

  for (let y = 0; y < R; y++) {
    for (let x = 0; x < C; x++) {
      if (board[y][x] === 'O') {
        result[y][x] = '.';

        for (let dir = 0; dir < 4; dir++) {
          const ny = y + dy[dir];
          const nx = x + dx[dir];

          if (ny >= 0 && ny < R && nx >= 0 && nx < C) {
            result[ny][nx] = '.';
          }
        }
      }
    }
  }

  return result;
}

function printBoard(board) {
  console.log(board.map((row) => row.join('')).join('\n'));
}

if (N === 1) {
  printBoard(initial);
} else if (N % 2 === 0) {
  const full = Array.from({ length: R }, () => 'O'.repeat(C));
  console.log(full.join('\n'));
} else {
  const first = getNext(initial);
  const second = getNext(first);

  if (N % 4 === 3) {
    printBoard(first);
  } else if (N % 4 === 1) {
    printBoard(second);
  }
}
