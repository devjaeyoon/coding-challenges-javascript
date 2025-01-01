const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, R] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => b - a);
}

const visited = new Array(N + 1).fill(false);
const orderOfVisit = new Array(N + 1).fill(0);
let order = 1;

function bfs(vertex) {
  const queue = [];
  queue.push(vertex);
  visited[vertex] = true;
  orderOfVisit[vertex] = order;
  order += 1;

  while (queue.length !== 0) {
    const dequeue = queue.shift();

    for (const neighbor of graph[dequeue]) {
      if (!visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true;
        orderOfVisit[neighbor] = order;
        order += 1;
      }
    }
  }
}

bfs(R);

console.log(orderOfVisit.slice(1).join('\n'));
