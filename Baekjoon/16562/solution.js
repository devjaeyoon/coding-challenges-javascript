const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M, k] = input.shift().split(' ').map(Number);
const friendFees = [0, ...input.shift().split(' ').map(Number)];

const parent = Array.from({ length: N + 1 }, (_, i) => i);

function find(x) {
  if (parent[x] === x) {
    return x;
  }

  return (parent[x] = find(parent[x]));
}

function union(x, y) {
  const rootX = find(x);
  const rootY = find(y);

  if (rootX !== rootY) {
    if (friendFees[rootX] < friendFees[rootY]) {
      parent[rootY] = rootX;
    } else {
      parent[rootX] = rootY;
    }
  }
}

for (let i = 0; i < M; i++) {
  const [v, w] = input[i].split(' ').map(Number);
  union(v, w);
}

const visitedRoots = new Set();
let totalCost = 0;

for (let i = 1; i <= N; i++) {
  const root = find(i);

  if (!visitedRoots.has(root)) {
    visitedRoots.add(root);
    totalCost += friendFees[root];
  }
}

if (totalCost <= k) {
  console.log(totalCost);
} else {
  console.log('Oh no');
}
