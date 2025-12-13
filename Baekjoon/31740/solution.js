const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

let lineIdx = 0;
const N = Number(input[lineIdx++]);

const adj = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < N - 1; i++) {
  const [u, v] = input[lineIdx++].trim().split(/\s+/).map(Number);
  adj[u].push(v);
  adj[v].push(u);
}

const weights = [0];
let totalSum = 0;

for (let i = 0; i < N; i++) {
  const w = Number(input[lineIdx++]);
  weights.push(w);
  totalSum += w;
}

const parent = new Int32Array(N + 1).fill(0);
const visited = new Int8Array(N + 1).fill(0);
const stack = [1];
const visitOrder = [];

visited[1] = 1;

while (stack.length > 0) {
  const u = stack.pop();
  visitOrder.push(u);

  for (const v of adj[u]) {
    if (!visited[v]) {
      visited[v] = 1;
      parent[v] = u;
      stack.push(v);
    }
  }
}

const subTreeSum = [...weights];

let minDiff = Infinity;
let ansEdge = [-1, -1];

for (let i = N - 1; i >= 0; i--) {
  const node = visitOrder[i];

  if (node === 1) {
    continue;
  }

  const p = parent[node];

  subTreeSum[p] += subTreeSum[node];

  const currentDiff = Math.abs(totalSum - 2 * subTreeSum[node]);

  if (currentDiff < minDiff) {
    minDiff = currentDiff;
    ansEdge = [node, p];
  }
}

console.log(minDiff);
console.log(ansEdge.join(' '));
