const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const graph = [];

for (let i = 1; i <= M; i++) {
  graph.push(input[i].split(' ').map(Number));
}

function bfs(graph, N, M) {
  const queue = [[0, 0]];
  const visited = Array.from({ length: M }, () => new Array(N).fill(false));
  visited[0][0] = true;

  const directions = [
    [0, 1],
    [1, 0],
  ];

  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    if (x === M - 1 && y === N - 1) {
      return true;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < M && ny >= 0 && ny < N && !visited[nx][ny] && graph[nx][ny] === 1) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }

  return false;
}

const result = bfs(graph, N, M);
console.log(result ? 'Yes' : 'No');
