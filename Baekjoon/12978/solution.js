const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const adj = Array.from({ length: N + 1 }, () => []);
for (const edge of input) {
  const [u, v] = edge.split(' ').map(Number);
  adj[u].push(v);
  adj[v].push(u);
}

const dp = Array.from({ length: N + 1 }, () => [0, 0]);
const visited = Array(N + 1).fill(false);

function dfs(u) {
  visited[u] = true;

  dp[u][1] = 1;
  dp[u][0] = 0;

  for (const v of adj[u]) {
    if (!visited[v]) {
      dfs(v);

      dp[u][1] += Math.min(dp[v][0], dp[v][1]);
      dp[u][0] += dp[v][1];
    }
  }
}

dfs(1);

console.log(Math.min(dp[1][0], dp[1][1]));
