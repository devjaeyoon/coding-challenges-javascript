const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const graph = input.slice(0, N).map((line) => line.split(' ').map(Number));
const prefixSum = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

graph.forEach((row, x) => {
  row.forEach((cell, y) => {
    prefixSum[x + 1][y + 1] = cell;
  });
});

for (let x = 1; x <= N; x++) {
  for (let y = 1; y <= N; y++) {
    prefixSum[x][y] +=
      prefixSum[x - 1][y] + prefixSum[x][y - 1] - prefixSum[x - 1][y - 1];
  }
}

const rangeSums = input.slice(N).map((line) => line.split(' ').map(Number));
const result = [];

rangeSums.forEach(([x1, y1, x2, y2]) => {
  result.push(
    prefixSum[x2][y2] -
      prefixSum[x1 - 1][y2] -
      prefixSum[x2][y1 - 1] +
      prefixSum[x1 - 1][y1 - 1]
  );
});

console.log(result.join('\n'));
