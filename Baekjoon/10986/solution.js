const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const numbers = input[0].split(' ').map(Number);
const remainderCounts = new Array(M).fill(0);
let currentSum = 0;
let answer = 0;

for (let i = 0; i < N; i++) {
  currentSum += numbers[i];
  const currentRemainder = currentSum % M;

  if (currentRemainder === 0) {
    answer += 1;
  }

  answer += remainderCounts[currentRemainder];

  remainderCounts[currentRemainder] += 1;
}

console.log(answer);
