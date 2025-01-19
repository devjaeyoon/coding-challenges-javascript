const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const graph = [];

for (let i = 1; i <= N; i++) {
  const row = input[i].split('').map(Number);

  graph.push(row);
}

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const queue = [[0, 0, 1]];
const visited = Array.from({ length: N }, () => new Array(M).fill(false));
visited[0][0] = true;

while (queue.length > 0) {
  const [y, x, moves] = queue.shift();

  if (y === N - 1 && x === M - 1) {
    console.log(moves);
    break;
  }

  for (const [dy, dx] of directions) {
    const ny = y + dy;
    const nx = x + dx;

    if (ny >= 0 && ny < N && nx >= 0 && nx < M && !visited[ny][nx] && graph[ny][nx] === 1) {
      visited[ny][nx] = true;
      queue.push([ny, nx, moves + 1]);
    }
  }
}
