const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, L, R] = input.shift().split(' ').map(Number);
const map = input.map((line) => line.split(' ').map(Number));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function bfs(startX, startY, visited) {
  const queue = [[startX, startY]];
  const union = [[startX, startY]];
  let totalPopulation = map[startX][startY];
  visited[startX][startY] = true;

  let head = 0;
  while (head < queue.length) {
    const [x, y] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= N || ny >= N) {
        continue;
      }

      if (!visited[nx][ny]) {
        const diff = Math.abs(map[x][y] - map[nx][ny]);
        if (diff >= L && diff <= R) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          union.push([nx, ny]);
          totalPopulation += map[nx][ny];
        }
      }
    }
  }

  return { union, totalPopulation };
}

let days = 0;

while (true) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let moved = false;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        const { union, totalPopulation } = bfs(i, j, visited);

        if (union.length > 1) {
          moved = true;
          const newPopulation = Math.floor(totalPopulation / union.length);
          for (const [x, y] of union) {
            map[x][y] = newPopulation;
          }
        }
      }
    }
  }

  if (!moved) {
    break;
  }

  days++;
}

console.log(days);
