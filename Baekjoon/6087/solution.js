const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [W, H] = input.shift().split(' ').map(Number);
const board = input;

const cPositions = [];
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (board[i][j] === 'C') {
      cPositions.push({ r: i, c: j });
    }
  }
}

const [start, end] = cPositions;

const mirrors = Array.from({ length: H }, () => Array(W).fill(-1));
const queue = [];
let head = 0;

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

queue.push(start);
mirrors[start.r][start.c] = 0;

while (head < queue.length) {
  const { r, c } = queue[head++];

  for (let i = 0; i < 4; i++) {
    let nr = r + dr[i];
    let nc = c + dc[i];

    while (nr >= 0 && nr < H && nc >= 0 && nc < W) {
      if (board[nr][nc] === '*') {
        break;
      }

      if (mirrors[nr][nc] === -1) {
        mirrors[nr][nc] = mirrors[r][c] + 1;
        queue.push({ r: nr, c: nc });
      }

      nr += dr[i];
      nc += dc[i];
    }
  }
}

console.log(mirrors[end.r][end.c] - 1);
