const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const G = Number(input.shift());
const P = Number(input.shift());
const parent = Array.from({ length: G + 1 }, (_, i) => i);

function find(x) {
  if (parent[x] === x) {
    return x;
  }
  parent[x] = find(parent[x]);

  return parent[x];
}

function union(a, b) {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA !== rootB) {
    parent[rootA] = rootB;
  }
}

let dockedCount = 0;

for (let i = 0; i < P; i++) {
  const gi = Number(input[i]);
  const availableGate = find(gi);

  if (availableGate === 0) {
    break;
  }

  dockedCount++;

  union(availableGate, availableGate - 1);
}

console.log(dockedCount);
