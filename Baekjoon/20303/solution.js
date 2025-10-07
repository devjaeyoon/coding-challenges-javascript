const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M, K] = input[0].split(' ').map(Number);
const candies = [0, ...input[1].split(' ').map(Number)];
const relations = input.slice(2).map((line) => line.split(' ').map(Number));

const parent = Array.from({ length: N + 1 }, (_, i) => i);

function find(x) {
  if (parent[x] === x) {
    return x;
  }

  parent[x] = find(parent[x]);

  return parent[x];
}

function union(x, y) {
  const rootX = find(x);
  const rootY = find(y);
  if (rootX !== rootY) {
    parent[rootY] = rootX;
  }
}

for (const [a, b] of relations) {
  union(a, b);
}

const groups = new Map();
for (let i = 1; i <= N; i++) {
  const root = find(i);
  if (!groups.has(root)) {
    groups.set(root, { kids: 0, totalCandies: 0 });
  }
  const groupInfo = groups.get(root);
  groupInfo.kids++;
  groupInfo.totalCandies += candies[i];
}

const groupList = Array.from(groups.values());

const dp = new Array(K).fill(0);

for (const group of groupList) {
  const kidsCount = group.kids;
  const candiesCount = group.totalCandies;

  for (let i = K - 1; i >= kidsCount; i--) {
    dp[i] = Math.max(dp[i], dp[i - kidsCount] + candiesCount);
  }
}

console.log(dp[K - 1]);
