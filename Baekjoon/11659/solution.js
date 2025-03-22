const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

const cumulativeSum = new Array(N + 1).fill(0);
for (let i = 0; i < N; i++) {
  cumulativeSum[i + 1] = cumulativeSum[i] + numbers[i];
}

for (let k = 2; k < 2 + M; k++) {
  const [i, j] = input[k].split(' ').map(Number);

  const intervalSum = cumulativeSum[j] - cumulativeSum[i - 1];
  console.log(intervalSum);
}
