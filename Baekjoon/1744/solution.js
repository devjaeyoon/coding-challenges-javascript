const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const numbers = input.map(Number);

if (N === 1) {
  console.log(numbers[0]);
} else {
  const positives = [];
  const negatives = [];
  let zeroCount = 0;
  let totalSum = 0;

  for (const num of numbers) {
    if (num > 1) {
      positives.push(num);
    } else if (num < 0) {
      negatives.push(num);
    } else if (num === 0) {
      zeroCount++;
    } else {
      totalSum += 1;
    }
  }

  positives.sort((a, b) => b - a);
  negatives.sort((a, b) => a - b);

  for (let i = 0; i < positives.length; i += 2) {
    if (i + 1 < positives.length) {
      totalSum += positives[i] * positives[i + 1];
    } else {
      totalSum += positives[i];
    }
  }

  for (let i = 0; i < negatives.length; i += 2) {
    if (i + 1 < negatives.length) {
      totalSum += negatives[i] * negatives[i + 1];
    } else {
      if (zeroCount === 0) {
        totalSum += negatives[i];
      }
    }
  }

  console.log(totalSum);
}
