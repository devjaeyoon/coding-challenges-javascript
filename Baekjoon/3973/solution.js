function findFarthestNode(startNode, n, adj) {
  const distances = Array(n).fill(-1);
  const queue = [startNode];
  distances[startNode] = 0;

  let farthestNode = startNode;
  let maxDistance = 0;

  let head = 0;
  while (head < queue.length) {
    const currentNode = queue[head++];

    for (const neighbor of adj[currentNode]) {
      if (distances[neighbor] === -1) {
        distances[neighbor] = distances[currentNode] + 1;
        queue.push(neighbor);

        if (distances[neighbor] > maxDistance) {
          maxDistance = distances[neighbor];
          farthestNode = neighbor;
        }
      }
    }
  }

  return { node: farthestNode, dist: maxDistance };
}

function solveTestCase(n, edges) {
  const adj = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
  }

  const { node: farthestNodeA } = findFarthestNode(0, n, adj);
  const { dist: diameter } = findFarthestNode(farthestNodeA, n, adj);

  return Math.ceil(diameter / 2);
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const c = Number(input.shift());
const results = [];
let lineIndex = 0;

for (let i = 0; i < c; i++) {
  const n = Number(input[lineIndex++]);
  const edges = [];

  for (let j = 0; j < n - 1; j++) {
    edges.push(input[lineIndex++].split(' ').map(Number));
  }

  results.push(solveTestCase(n, edges));
}

console.log(results.join('\n'));
