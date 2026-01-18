const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const villagerCounts = [0, ...input.shift().split(' ').map(Number)];

const tree = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < N - 1; i++) {
  const [u, v] = input[i].split(' ').map(Number);

  tree[u].push(v);
  tree[v].push(u);
}

const dp = Array.from({ length: N + 1 }, () => [0, 0]);
const visited = new Array(N + 1).fill(false);
const parent = new Array(N + 1).fill(0);
const order = [];

const stack = [1];
while (stack.length) {
  const cur = stack.pop();

  if (visited[cur]) continue;
  visited[cur] = true;
  order.push(cur);

  for (const next of tree[cur]) {
    if (!visited[next]) {
      parent[next] = cur;
      stack.push(next);
    }
  }
}

for (let i = N - 1; i >= 0; i--) {
  const cur = order[i];

  dp[cur][1] += villagerCounts[cur];

  const p = parent[cur];
  if (p !== 0) {
    dp[p][0] += Math.max(dp[cur][0], dp[cur][1]);
    dp[p][1] += dp[cur][0];
  }
}

console.log(Math.max(dp[1][0], dp[1][1]));
