const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, R] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
let lineIdx = 1;

for (let i = 0; i < N - 1; i++) {
  const [u, v] = input[lineIdx++].split(' ').map(Number);

  graph[u].push(v);
  graph[v].push(u);
}

const dp = new Array(N + 1).fill(undefined);

const L = Number(input[lineIdx++]);
for (let i = 0; i < L; i++) {
  const [k, t] = input[lineIdx++].split(' ').map(Number);

  dp[k] = t;
}

const Q = Number(input[lineIdx++]);
const queries = [];
for (let i = 0; i < Q; i++) {
  queries.push(Number(input[lineIdx++]));
}

const depth = new Array(N + 1).fill(0);
const parent = new Array(N + 1).fill(0);
const visited = new Array(N + 1).fill(false);

const queue = [R];
let head = 0;
visited[R] = true;

const order = [];

while (head < queue.length) {
  const u = queue[head++];
  order.push(u);

  for (let i = 0; i < graph[u].length; i++) {
    const v = graph[u][i];

    if (!visited[v]) {
      visited[v] = true;
      depth[v] = depth[u] + 1;
      parent[v] = u;
      queue.push(v);
    }
  }
}

for (let i = order.length - 1; i >= 0; i--) {
  const u = order[i];

  if (dp[u] !== undefined) {
    continue;
  }

  const isMax = depth[u] % 2 === 0;
  let val = isMax ? -1 : Infinity;

  for (let j = 0; j < graph[u].length; j++) {
    const v = graph[u][j];

    if (v !== parent[u]) {
      val = isMax ? Math.max(val, dp[v]) : Math.min(val, dp[v]);
    }
  }

  dp[u] = val;
}

const result = [];
for (let i = 0; i < queries.length; i++) {
  result.push(dp[queries[i]]);
}

console.log(result.join('\n'));
