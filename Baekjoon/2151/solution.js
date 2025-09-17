const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const board = input.map((line) => line.split(''));
const doors = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === '#') {
      doors.push([i, j]);
    }
  }
}

const [startY, startX] = doors[0];
const [endY, endX] = doors[1];
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const dist = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => Array(4).fill(Infinity))
);

const deque = [];
for (let i = 0; i < 4; i++) {
  dist[startY][startX][i] = 0;
  deque.push([0, startY, startX, i]);
}

let head = 0;
while (head < deque.length) {
  const [mirrors, y, x, dir] = deque[head++];

  if (mirrors > dist[y][x][dir]) {
    continue;
  }

  const ny = y + dy[dir];
  const nx = x + dx[dir];

  if (ny >= 0 && ny < N && nx >= 0 && nx < N && board[ny][nx] !== '*') {
    if (dist[ny][nx][dir] > mirrors) {
      dist[ny][nx][dir] = mirrors;
      deque.splice(head, 0, [mirrors, ny, nx, dir]);
    }

    if (board[ny][nx] === '!') {
      const nextDirs = dir <= 1 ? [2, 3] : [0, 1];
      for (const nextDir of nextDirs) {
        if (dist[ny][nx][nextDir] > mirrors + 1) {
          dist[ny][nx][nextDir] = mirrors + 1;
          deque.push([mirrors + 1, ny, nx, nextDir]);
        }
      }
    }
  }
}

const result = Math.min(...dist[endY][endX]);

console.log(result);
