const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const ropes = input.map(Number).sort((a, b) => b - a);
const maxWeights = [];

for (let i = 0; i < N; i++) {
  maxWeights.push(ropes[i] * (i + 1));
}

console.log(Math.max(...maxWeights));
