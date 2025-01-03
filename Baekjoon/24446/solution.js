const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, R] = input[0].split(' ').map(Number);
const adjacencyList = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  adjacencyList[u].push(v);
  adjacencyList[v].push(u);
}

const vertexDepth = new Array(N + 1).fill(-1);

function bfs(start) {
  const queue = [[start, 0]];
  vertexDepth[start] = 0;

  while (queue.length > 0) {
    const [vertex, depth] = queue.shift();

    for (const neighbor of adjacencyList[vertex]) {
      if (vertexDepth[neighbor] === -1) {
        vertexDepth[neighbor] = depth + 1;
        queue.push([neighbor, depth + 1]);
      }
    }
  }
}

bfs(R);

console.log(vertexDepth.slice(1).join('\n'));
