const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [M, N] = input.shift().split(' ').map(Number);
const maze = input.map((line) => line.split('').map(Number));
const dist = Array.from({ length: N }, () => Array(M).fill(Infinity));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

function bfs() {
  const deque = [];

  deque.push([0, 0]);
  dist[0][0] = 0;

  while (deque.length > 0) {
    const [x, y] = deque.shift();

    if (x === M - 1 && y === N - 1) {
      return dist[y][x];
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
        const cost = maze[ny][nx];

        if (dist[ny][nx] > dist[y][x] + cost) {
          dist[ny][nx] = dist[y][x] + cost;

          if (cost === 0) {
            deque.unshift([nx, ny]);
          } else {
            deque.push([nx, ny]);
          }
        }
      }
    }
  }
}

console.log(bfs());
