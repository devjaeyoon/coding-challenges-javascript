const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const MOD = 998_244_353;

const N = Number(input.shift());
const parents = input.shift().split(' ').map(Number);
const strengths = input.shift().split(' ').map(Number);
const adj = Array(N + 1)
  .fill(0)
  .map(() => []);

let root = -1;

for (let i = 0; i < N; i++) {
  const u = i + 1;
  const p = parents[i];

  if (p === 0) {
    root = u;
  } else {
    adj[p].push(u);
  }
}

const isLeaf = Array(N + 1).fill(false);
for (let i = 1; i <= N; i++) {
  if (adj[i].length === 0) {
    isLeaf[i] = true;
  }
}

const memo = Array(N + 1).fill(-1);

function countPlays(u) {
  if (memo[u] !== -1) {
    return memo[u];
  }

  if (isLeaf[u]) {
    return (memo[u] = 1);
  }

  const strength = strengths[u - 1];

  if (strength === 0) {
    return (memo[u] = 0);
  }

  let totalPlays = 0;

  const queue = [];

  for (const child of adj[u]) {
    queue.push([child, 1]);
  }

  while (queue.length > 0) {
    const [curr, dist] = queue.shift();

    if (dist > strength) {
      continue;
    }

    totalPlays = (totalPlays + countPlays(curr)) % MOD;

    for (const nextChild of adj[curr]) {
      queue.push([nextChild, dist + 1]);
    }
  }

  return (memo[u] = totalPlays);
}

console.log(countPlays(root));
