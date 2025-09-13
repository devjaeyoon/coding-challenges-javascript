const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const edges = input.map((line) => line.split(' ').map(Number));
const parent = Array.from({ length: N + 1 }, (_, i) => i);

function find(x) {
  if (parent[x] === x) {
    return x;
  }
  parent[x] = find(parent[x]);

  return parent[x];
}

function union(x, y) {
  const rootX = find(x);
  const rootY = find(y);

  if (rootX === rootY) {
    return false;
  }

  if (rootX < rootY) {
    parent[rootY] = rootX;
  } else {
    parent[rootX] = rootY;
  }

  return true;
}

let cycleCount = 0;
for (const [u, v] of edges) {
  if (!union(u, v)) {
    cycleCount++;
  }
}

const roots = new Set();
for (let i = 1; i <= N; i++) {
  roots.add(find(i));
}

const componentCount = roots.size;
const newEdgesNeeded = componentCount - 1;
const totalOperations = cycleCount + newEdgesNeeded;

console.log(totalOperations);
