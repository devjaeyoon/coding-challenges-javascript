const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const parents = input[0].split(' ').map(Number);

const tree = Array.from({ length: N }, () => []);
for (let i = 0; i < N; i++) {
  const parent = parents[i];

  if (parent !== -1) {
    tree[parent].push(i);
  }
}

function dfs(node) {
  if (tree[node].length === 0) {
    return 0;
  }

  const childTimes = [];
  for (const child of tree[node]) {
    childTimes.push(dfs(child));
  }

  childTimes.sort((a, b) => b - a);

  let maxTime = 0;
  for (let i = 0; i < childTimes.length; i++) {
    maxTime = Math.max(maxTime, i + 1 + childTimes[i]);
  }

  return maxTime;
}

const result = dfs(0);
console.log(result);
