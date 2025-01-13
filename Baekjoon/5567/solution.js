const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const m = Number(input[1]);
const adjacencyList = Array.from({ length: n + 1 }, () => []);

for (let i = 2; i < 2 + m; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  adjacencyList[a].push(b);
  adjacencyList[b].push(a);
}

const visited = new Array(n + 1).fill(false);
let cnt = 0;

function bfs(startVertex, startDepth) {
  const queue = [[startVertex, startDepth]];
  visited[startVertex] = true;

  while (queue.length !== 0) {
    const [vertex, depth] = queue.shift();

    for (const neighbor of adjacencyList[vertex]) {
      if (!visited[neighbor]) {
        queue.push([neighbor, depth + 1]);
        visited[neighbor] = true;
        if (depth < 2) {
          cnt += 1;
        }
      }
    }
  }
}

bfs(1, 0);

console.log(cnt);
