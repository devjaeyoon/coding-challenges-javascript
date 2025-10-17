const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const matrix = input.map((row) => row.split(' ').map(Number));

let maxSum = -Infinity;

for (let i = 0; i < N; i++) {
  const colSums = Array(M).fill(0);

  for (let j = i; j < N; j++) {
    for (let k = 0; k < M; k++) {
      colSums[k] += matrix[j][k];
    }

    let currentSum = 0;
    let maxSliceSum = -Infinity;

    for (const sum of colSums) {
      currentSum = Math.max(sum, currentSum + sum);
      maxSliceSum = Math.max(maxSliceSum, currentSum);
    }

    maxSum = Math.max(maxSum, maxSliceSum);
  }
}

console.log(maxSum);
