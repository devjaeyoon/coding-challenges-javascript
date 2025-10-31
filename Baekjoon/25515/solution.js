const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const n = Number(input.shift());

const values = input.pop().split(' ').map(Number);
const adj = Array.from({ length: n }, () => []);

for (const line of input) {
  const [parent, child] = line.split(' ').map(Number);
  adj[parent].push(child);
}

function dfs(currentNode) {
  let currentMaxSum = values[currentNode];

  for (const childNode of adj[currentNode]) {
    const childSubtreeSum = dfs(childNode);

    if (childSubtreeSum > 0) {
      currentMaxSum += childSubtreeSum;
    }
  }

  return currentMaxSum;
}

const result = dfs(0);
console.log(result);
