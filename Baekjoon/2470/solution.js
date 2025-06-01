const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const solutions = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const answer = [0, 0];
let left = 0;
let right = N - 1;
let minDiff = Infinity;

while (left < right) {
  const sum = solutions[left] + solutions[right];
  const absSum = Math.abs(sum);

  if (absSum < minDiff) {
    minDiff = absSum;
    answer[0] = solutions[left];
    answer[1] = solutions[right];
  }

  if (sum < 0) {
    left++;
  } else {
    right--;
  }
}

console.log(answer[0], answer[1]);
