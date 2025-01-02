const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, R] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

const visited = new Array(N + 1).fill(false);
const vertexDepth = new Array(N + 1).fill(-1);

function dfs(vertex, depth) {
  visited[vertex] = true;
  vertexDepth[vertex] = depth;

  for (const neighbor of graph[vertex]) {
    if (!visited[neighbor]) {
      dfs(neighbor, depth + 1);
    }
  }
}

dfs(R, 0);

console.log(vertexDepth.slice(1).join('\n'));
