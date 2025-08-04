const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const tree = Array.from({ length: N + 1 }, () => []);
const LOG = 17;

for (let i = 0; i < N - 1; i++) {
  const [u, v, w] = input[i].split(' ').map(Number);

  tree[u].push([v, w]);
  tree[v].push([u, w]);
}

const depth = Array(N + 1).fill(0);
const dist = Array(N + 1).fill(0);
const parent = Array.from({ length: N + 1 }, () => Array(LOG).fill(0));
const visited = Array(N + 1).fill(false);

function dfs(cur, d) {
  visited[cur] = true;
  depth[cur] = d;

  for (const [next, weight] of tree[cur]) {
    if (!visited[next]) {
      dist[next] = dist[cur] + weight;
      parent[next][0] = cur;
      dfs(next, d + 1);
    }
  }
}

dfs(1, 0);

for (let k = 1; k < LOG; k++) {
  for (let i = 1; i <= N; i++) {
    parent[i][k] = parent[parent[i][k - 1]][k - 1];
  }
}

function lca(u, v) {
  if (depth[u] < depth[v]) {
    [u, v] = [v, u];
  }

  for (let k = LOG - 1; k >= 0; k--) {
    if (depth[u] - (1 << k) >= depth[v]) {
      u = parent[u][k];
    }
  }

  if (u === v) {
    return u;
  }

  for (let k = LOG - 1; k >= 0; k--) {
    if (parent[u][k] !== parent[v][k]) {
      u = parent[u][k];
      v = parent[v][k];
    }
  }

  return parent[u][0];
}

const M = Number(input[N - 1]);
const results = [];

for (let i = N; i < N + M; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  const ancestor = lca(a, b);

  results.push(dist[a] + dist[b] - 2 * dist[ancestor]);
}

console.log(results.join('\n'));
