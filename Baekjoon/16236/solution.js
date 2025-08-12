const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const map = input.map((line) => line.split(' ').map(Number));

let sharkSize = 2;
let eatCount = 0;
let totalTime = 0;
let sharkPos;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 9) {
      sharkPos = [i, j];
      map[i][j] = 0;
    }
  }
}

const dr = [-1, 0, 1, 0];
const dc = [0, -1, 0, 1];

const findFish = () => {
  const queue = [[...sharkPos, 0]];
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  visited[sharkPos[0]][sharkPos[1]] = true;
  const edibleFish = [];

  while (queue.length > 0) {
    const [r, c, dist] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr < 0 || nr >= N || nc < 0 || nc >= N) {
        continue;
      }

      if (visited[nr][nc] || map[nr][nc] > sharkSize) {
        continue;
      }

      visited[nr][nc] = true;

      if (map[nr][nc] > 0 && map[nr][nc] < sharkSize) {
        edibleFish.push({ r: nr, c: nc, dist: dist + 1 });
      }

      queue.push([nr, nc, dist + 1]);
    }
  }

  edibleFish.sort((a, b) => {
    if (a.dist !== b.dist) {
      return a.dist - b.dist;
    }
    if (a.r !== b.r) {
      return a.r - b.r;
    }

    return a.c - b.c;
  });

  return edibleFish.length > 0 ? edibleFish[0] : null;
};

while (true) {
  const targetFish = findFish();

  if (!targetFish) {
    break;
  }

  totalTime += targetFish.dist;
  eatCount++;
  map[targetFish.r][targetFish.c] = 0;
  sharkPos = [targetFish.r, targetFish.c];

  if (eatCount === sharkSize) {
    sharkSize++;
    eatCount = 0;
  }
}

console.log(totalTime);
