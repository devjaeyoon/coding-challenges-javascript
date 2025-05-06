const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const board = input.map((line) => line.trim());
let minRepaint = Infinity;

function countRepaint(x, y, startColor) {
  let count = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const expectedColor =
        (i + j) % 2 === 0 ? startColor : startColor === 'W' ? 'B' : 'W';
      if (board[x + i][y + j] !== expectedColor) {
        count++;
      }
    }
  }

  return count;
}

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    const repaintWResult = countRepaint(i, j, 'W');
    const repaintBResult = countRepaint(i, j, 'B');

    minRepaint = Math.min(minRepaint, repaintWResult, repaintBResult);
  }
}

console.log(minRepaint);
