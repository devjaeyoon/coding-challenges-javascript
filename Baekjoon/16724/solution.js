const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const map = input;

const visited = new Int32Array(N * M);

let safeZones = 0;
let currentPathId = 1;

for (let i = 0; i < N * M; i++) {
  if (visited[i] === 0) {
    let cur = i;

    while (visited[cur] === 0) {
      visited[cur] = currentPathId;

      const r = Math.floor(cur / M);
      const c = cur % M;
      const dir = map[r][c];

      let nextIdx = 0;
      if (dir === 'U') {
        nextIdx = cur - M;
      } else if (dir === 'D') {
        nextIdx = cur + M;
      } else if (dir === 'L') {
        nextIdx = cur - 1;
      } else if (dir === 'R') {
        nextIdx = cur + 1;
      }

      cur = nextIdx;
    }

    if (visited[cur] === currentPathId) {
      safeZones++;
    }

    currentPathId++;
  }
}

console.log(safeZones);
