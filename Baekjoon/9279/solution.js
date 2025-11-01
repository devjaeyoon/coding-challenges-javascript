const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const results = [];
let line = 0;

function dfs(u, p, adj) {
  let isLeaf = true;
  let totalCost = 0;

  for (const neighbor of adj[u]) {
    const v = neighbor.node;
    const w = neighbor.cost;

    if (v === p) {
      continue;
    }

    isLeaf = false;

    const childCost = dfs(v, u, adj);

    totalCost += Math.min(w, childCost);
  }

  if (isLeaf) {
    return Infinity;
  } else {
    return totalCost;
  }
}

while (line < input.length) {
  const lineData = input[line++];
  if (!lineData) break;

  const [N, C] = lineData.split(' ').map(Number);
  if (isNaN(N)) break;

  const adj = Array.from({ length: N + 1 }, () => []);
  for (let i = 0; i < N - 1; i++) {
    const [u, v, w] = input[line++].split(' ').map(Number);
    adj[u].push({ node: v, cost: w });
    adj[v].push({ node: u, cost: w });
  }

  const answer = dfs(C, -1, adj);

  results.push(answer);
}

console.log(results.join('\n'));
