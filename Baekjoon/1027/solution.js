const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const buildingHeights = input[0].split(' ').map(Number);
let answer = 0;

for (let i = 0; i < N; i++) {
  let visibleCount = 0;

  let maxSlope = -Infinity;
  for (let j = i - 1; j >= 0; j--) {
    const slope = (buildingHeights[j] - buildingHeights[i]) / (i - j);
    if (slope > maxSlope) {
      maxSlope = slope;
      visibleCount++;
    }
  }

  maxSlope = -Infinity;
  for (let j = i + 1; j < N; j++) {
    const slope = (buildingHeights[j] - buildingHeights[i]) / (j - i);
    if (slope > maxSlope) {
      maxSlope = slope;
      visibleCount++;
    }
  }

  answer = Math.max(answer, visibleCount);
}

console.log(answer);
