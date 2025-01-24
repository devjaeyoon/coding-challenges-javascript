const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, K, X] = input[0].split(' ').map(Number);
const adjacencyList = Array.from({ length: N + 1 }, () => []);
const distances = new Array(N + 1).fill(-1);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);

  adjacencyList[u].push(v);
}

function bfs(start) {
  const queue = [start];
  const result = [];
  let queueIndex = 0;
  distances[start] = 0;

  while (queueIndex < queue.length) {
    const node = queue[queueIndex++];
    const distance = distances[node];

    if (distance === K) {
      result.push(node);
    }
    if (distance > K) {
      break;
    }

    for (const neighbor of adjacencyList[node]) {
      if (distances[neighbor] === -1) {
        distances[neighbor] = distance + 1;
        queue.push(neighbor);
      }
    }
  }

  return result;
}

const result = bfs(X);

console.log(result.length === 0 ? -1 : result.sort((a, b) => a - b).join('\n'));
