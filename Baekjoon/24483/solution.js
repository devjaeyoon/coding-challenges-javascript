const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, R] = input[0].split(' ').map(Number);
const adjacencyList = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  adjacencyList[u].push(v);
  adjacencyList[v].push(u);
}

for (let i = 1; i <= N; i++) {
  adjacencyList[i].sort((a, b) => a - b);
}

const visited = new Array(N + 1).fill(false);
const vertexDepths = new Array(N + 1).fill(0);
const orderOfVisit = new Array(N + 1).fill(-1);
let order = 1;

function dfs(vertex, depth) {
  visited[vertex] = true;
  vertexDepths[vertex] = depth;
  orderOfVisit[vertex] = order;
  order += 1;

  for (const neighbor of adjacencyList[vertex]) {
    if (!visited[neighbor]) {
      dfs(neighbor, depth + 1);
    }
  }
}

dfs(R, 0);

let result = 0;

for (let i = 1; i <= N; i++) {
  result += vertexDepths[i] * orderOfVisit[i];
}

console.log(result);
