const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = parseInt(input[0]);
const treeEdges = input.slice(1, N);
const queries = input.slice(N + 1);

const LOG_N = 17;

const adj = Array.from({ length: N + 1 }, () => []);
const depth = Array(N + 1).fill(-1);
const parent = Array.from({ length: LOG_N }, () => Array(N + 1).fill(0));

for (const edge of treeEdges) {
  const [u, v] = edge.split(' ').map(Number);
  adj[u].push(v);
  adj[v].push(u);
}

function bfs(startNode) {
  const queue = [[startNode, 0]];
  depth[startNode] = 0;
  parent[0][startNode] = 0;
  let head = 0;

  while (head < queue.length) {
    const [current, d] = queue[head++];

    for (const next of adj[current]) {
      if (depth[next] === -1) {
        depth[next] = d + 1;
        parent[0][next] = current;
        queue.push([next, d + 1]);
      }
    }
  }
}

function setParent() {
  for (let k = 1; k < LOG_N; k++) {
    for (let i = 1; i <= N; i++) {
      parent[k][i] = parent[k - 1][parent[k - 1][i]];
    }
  }
}

function lca(u, v) {
  if (depth[u] < depth[v]) {
    [u, v] = [v, u];
  }

  for (let k = LOG_N - 1; k >= 0; k--) {
    if (depth[u] - depth[v] >= 1 << k) {
      u = parent[k][u];
    }
  }

  if (u === v) {
    return u;
  }

  for (let k = LOG_N - 1; k >= 0; k--) {
    if (parent[k][u] !== parent[k][v]) {
      u = parent[k][u];
      v = parent[k][v];
    }
  }

  return parent[0][u];
}

bfs(1);
setParent();

const result = [];
for (const query of queries) {
  const [u, v] = query.split(' ').map(Number);
  result.push(lca(u, v));
}

console.log(result.join('\n'));
