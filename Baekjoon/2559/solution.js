const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const temperatures = input[0].split(' ').map(Number);
const prefixSums = [];

for (let i = 0; i <= N - K; i++) {
  let sum = 0;

  for (let j = i; j < i + K; j++) {
    sum += temperatures[j];
  }

  prefixSums.push(sum);
}

console.log(Math.max(...prefixSums));
