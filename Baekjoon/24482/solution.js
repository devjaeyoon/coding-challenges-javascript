const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, R] = input[0].split(' ').map(Number);
const adjacencyList = new Array(N + 1).fill([]);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  adjacencyList[u].push(v);
  adjacencyList[v].push(u);
}

for (let i = 1; i <= N; i++) {
  adjacencyList[i].sort((a, b) => b - a);
}

const visited = new Array(N + 1).fill(false);
const vertexDepths = new Array(N + 1).fill(-1);

function dfs(vertex, depth) {
  visited[vertex] = true;
  vertexDepths[vertex] = depth;

  for (const neighbor of adjacencyList[vertex]) {
    if (!visited[neighbor]) {
      dfs(neighbor, depth + 1);
    }
  }
}

dfs(R, 0);

console.log(vertexDepths.slice(1).join('\n'));
