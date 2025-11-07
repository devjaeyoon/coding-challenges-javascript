const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const prefixSumCount = new Map();
let count = 0;
let currentSum = 0;

prefixSumCount.set(0, 1);

for (let i = 0; i < N; i++) {
  currentSum += A[i];

  const targetSum = currentSum - K;

  if (prefixSumCount.has(targetSum)) {
    count += prefixSumCount.get(targetSum);
  }

  prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1);
}

console.log(count);
