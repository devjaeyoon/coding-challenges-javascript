const input = require('fs')
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const M = Number(input.shift());

const adjMatrix = input.slice(0, N).map((row) => row.split(' ').map(Number));
const plan = input[N].split(' ').map((city) => Number(city) - 1);
const parent = Array.from({ length: N }, (_, i) => i);

function findParent(parent, x) {
  if (parent[x] === x) {
    return x;
  }

  return (parent[x] = findParent(parent, parent[x]));
}

function unionParent(parent, a, b) {
  const rootA = findParent(parent, a);
  const rootB = findParent(parent, b);

  if (rootA < rootB) {
    parent[rootB] = rootA;
  } else {
    parent[rootA] = rootB;
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (adjMatrix[i][j] === 1) {
      unionParent(parent, i, j);
    }
  }
}

const firstCityRoot = findParent(parent, plan[0]);
let isPossible = true;

for (let i = 1; i < M; i++) {
  if (findParent(parent, plan[i]) !== firstCityRoot) {
    isPossible = false;
    break;
  }
}

console.log(isPossible ? 'YES' : 'NO');
