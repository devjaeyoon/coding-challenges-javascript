const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);

const adj = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i < N; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  adj[u].push(v);
  adj[v].push(u);
}

const costs = Array.from({ length: N + 1 }, () => [0, 0, 0]);
for (let i = 0; i < N; i++) {
  const [r, g, b] = input[N + i].split(' ').map(Number);
  costs[i + 1][0] = r;
  costs[i + 1][1] = g;
  costs[i + 1][2] = b;
}

const parent = new Int32Array(N + 1).fill(0);
const visited = new Int8Array(N + 1).fill(0);
const order = [];
const stack = [1];
visited[1] = 1;

while (stack.length > 0) {
  const curr = stack.pop();
  order.push(curr);

  for (const next of adj[curr]) {
    if (!visited[next]) {
      visited[next] = 1;
      parent[next] = curr;
      stack.push(next);
    }
  }
}

const dp = Array.from({ length: N + 1 }, (_, i) => [...costs[i]]);

for (let i = N - 1; i >= 0; i--) {
  const current = order[i];
  const p = parent[current];

  for (const neighbor of adj[current]) {
    if (neighbor !== p) {
      dp[current][0] += Math.max(dp[neighbor][1], dp[neighbor][2]);
      dp[current][1] += Math.max(dp[neighbor][0], dp[neighbor][2]);
      dp[current][2] += Math.max(dp[neighbor][0], dp[neighbor][1]);
    }
  }
}

const maxScore = Math.max(dp[1][0], dp[1][1], dp[1][2]);
console.log(maxScore);

const resultColors = new Int8Array(N + 1);
const colorChars = ['R', 'G', 'B'];

if (dp[1][0] === maxScore) {
  resultColors[1] = 0;
} else if (dp[1][1] === maxScore) {
  resultColors[1] = 1;
} else {
  resultColors[1] = 2;
}

for (let i = 0; i < N; i++) {
  const current = order[i];
  const currentColor = resultColors[current];

  for (const child of adj[current]) {
    if (child !== parent[current]) {
      if (currentColor === 0) {
        if (dp[child][1] > dp[child][2]) {
          resultColors[child] = 1;
        } else {
          resultColors[child] = 2;
        }
      } else if (currentColor === 1) {
        if (dp[child][0] > dp[child][2]) {
          resultColors[child] = 0;
        } else {
          resultColors[child] = 2;
        }
      } else {
        if (dp[child][0] > dp[child][1]) {
          resultColors[child] = 0;
        } else {
          resultColors[child] = 1;
        }
      }
    }
  }
}

let lightBulbColor = '';
for (let i = 1; i <= N; i++) {
  lightBulbColor += colorChars[resultColors[i]];
}
console.log(lightBulbColor);
