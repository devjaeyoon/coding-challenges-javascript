const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [R, C] = input.shift().split(' ').map(Number);
const lake = input.map((line) => line.split(''));

const swanPos = [];
const waterQueue = [];
let swanQueue = [];

const visited = Array.from({ length: R }, () => Array(C).fill(false));
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

for (let r = 0; r < R; r++) {
  for (let c = 0; c < C; c++) {
    if (lake[r][c] === 'L') {
      swanPos.push([r, c]);
      waterQueue.push([r, c]);
      lake[r][c] = '.';
    } else if (lake[r][c] === '.') {
      waterQueue.push([r, c]);
    }
  }
}

swanQueue.push(swanPos[0]);
visited[swanPos[0][0]][swanPos[0][1]] = true;

let days = 0;
let swanHead = 0;
let waterHead = 0;

while (true) {
  const nextSwanQueue = [];

  while (swanHead < swanQueue.length) {
    const [r, c] = swanQueue[swanHead++];
    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr < 0 || nr >= R || nc < 0 || nc >= C || visited[nr][nc]) {
        continue;
      }
      visited[nr][nc] = true;

      if (nr === swanPos[1][0] && nc === swanPos[1][1]) {
        console.log(days);
        return;
      }

      if (lake[nr][nc] === '.') {
        swanQueue.push([nr, nc]);
      } else if (lake[nr][nc] === 'X') {
        nextSwanQueue.push([nr, nc]);
      }
    }
  }

  const waterProcessLimit = waterQueue.length;
  while (waterHead < waterProcessLimit) {
    const [r, c] = waterQueue[waterHead++];

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr < 0 || nr >= R || nc < 0 || nc >= C) {
        continue;
      }

      if (lake[nr][nc] === 'X') {
        lake[nr][nc] = '.';
        waterQueue.push([nr, nc]);
      }
    }
  }

  swanQueue = nextSwanQueue;
  swanHead = 0;
  days += 1;
}
