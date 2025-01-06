const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, R] = input[0].split(' ').map(Number);
const trunks = [];

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  trunks.push([u, v]);
}

trunks.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

const adjacencyList = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  const [u, v] = trunks[i];
  adjacencyList[u].push(v);
  adjacencyList[v].push(u);
}

const vertexDepth = new Array(N + 1).fill(-1);
const orderOfVisit = new Array(N + 1).fill(0);
let order = 1;

function bfs(start) {
  const queue = [[start, 0]];
  vertexDepth[start] = 0;
  orderOfVisit[start] = order;
  order += 1;

  while (queue.length !== 0) {
    const [vertex, depth] = queue.shift();

    for (const neighbor of adjacencyList[vertex]) {
      if (vertexDepth[neighbor] === -1) {
        queue.push([neighbor, depth + 1]);
        vertexDepth[neighbor] = depth + 1;
        orderOfVisit[neighbor] = order;
        order += 1;
      }
    }
  }
}

bfs(R);

let result = 0;

for (let i = 1; i <= N; i++) {
  result += vertexDepth[i] * orderOfVisit[i];
}

console.log(result);
