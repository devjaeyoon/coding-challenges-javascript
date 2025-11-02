const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const n = Number(input.shift());
const adj = Array.from({ length: n }, () => []);
const costs = Array.from({ length: n }, () => [0, 0]);
const dp = Array.from({ length: n }, () => [0, 0]);

for (let i = 0; i < n - 1; i++) {
  const [p, c] = input[i].split(' ').map(Number);
  adj[p].push(c);
}

for (let i = 0; i < n; i++) {
  const [w, b] = input[n - 1 + i].split(' ').map(Number);
  costs[i][0] = w;
  costs[i][1] = b;
}

function dfs(u) {
  dp[u][0] = costs[u][0];
  dp[u][1] = costs[u][1];

  for (const v of adj[u]) {
    dfs(v);

    dp[u][0] += Math.min(dp[v][0], dp[v][1]);
    dp[u][1] += dp[v][0];
  }
}

dfs(0);

console.log(Math.min(dp[0][0], dp[0][1]));
