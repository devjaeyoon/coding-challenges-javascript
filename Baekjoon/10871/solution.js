const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, X] = input[0].split(' ').map(Number);
const sequence = input[1].split(' ').map(Number);
const result = [];

for (let i = 0; i < N; i++) {
  if (sequence[i] < X) {
    result.push(sequence[i]);
  }
}

console.log(result.join(' '));
