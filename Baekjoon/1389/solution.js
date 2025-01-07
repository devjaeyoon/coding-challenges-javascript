const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const adjacencyList = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  adjacencyList[u].push(v);
  adjacencyList[v].push(u);
}

function calculateTotalKevinBaconNumber(user) {
  const visited = new Array(N + 1).fill(false);
  const kevinBaconNumbers = new Array(N + 1).fill(0);
  let totalKevinBaconNumber = 0;

  bfs(user, 0, visited, kevinBaconNumbers);

  kevinBaconNumbers.map((kevinBaconNumber) => (totalKevinBaconNumber += kevinBaconNumber));

  return totalKevinBaconNumber;
}

function bfs(start, depth, visited, kevinBaconNumbers) {
  const queue = [[start, depth]];
  visited[start] = true;

  while (queue.length !== 0) {
    const [vertex, depth] = queue.shift();
    kevinBaconNumbers[vertex] = depth;

    for (const neighbor of adjacencyList[vertex]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push([neighbor, depth + 1]);
      }
    }
  }
}

const totalKevinBaconNumbers = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  totalKevinBaconNumbers[i] += calculateTotalKevinBaconNumber(i);
}

console.log(totalKevinBaconNumbers.indexOf(Math.min(...totalKevinBaconNumbers.slice(1))));
