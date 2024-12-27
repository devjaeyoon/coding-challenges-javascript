const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));

for (let i = 1; i <= M; i++) {
  const [row, col] = input[i].split(' ').map(Number);
  graph[row][col] = 1;
  graph[col][row] = 1;
}

const visited = new Array(N + 1).fill(false);

function bfs(node) {
  const queue = [];

  visited[node] = true;
  queue.push(node);

  while (queue.length !== 0) {
    const dequeue = queue.shift();

    for (let i = 1; i < graph.length; i++) {
      if (graph[dequeue][i] === 1 && visited[i] === false) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }
}

let result = 0;

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    bfs(i);
    result += 1;
  }
}

console.log(result);
