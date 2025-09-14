const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, L] = input.shift().split(' ').map(Number);
const puddles = input.map((line) => line.split(' ').map(Number));

puddles.sort((a, b) => a[0] - b[0]);

let plankCount = 0;
let lastPlankPos = 0;

for (const [start, end] of puddles) {
  const plankStartPos = Math.max(start, lastPlankPos);
  const lengthToCover = end - plankStartPos;

  if (lengthToCover > 0) {
    const neededPlanks = Math.ceil(lengthToCover / L);

    plankCount += neededPlanks;

    lastPlankPos = plankStartPos + neededPlanks * L;
  }
}

console.log(plankCount);
