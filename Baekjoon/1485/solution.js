const input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());
const results = [];
let lineIndex = 0;

function getSquaredDist(p1, p2) {
  const dx = p1[0] - p2[0];
  const dy = p1[1] - p2[1];

  return dx * dx + dy * dy;
}

for (let i = 0; i < T; i++) {
  const points = [];

  for (let j = 0; j < 4; j++) {
    points.push(input[lineIndex].split(' ').map(Number));
    lineIndex++;
  }

  const distances = [];
  for (let j = 0; j < 4; j++) {
    for (let k = j + 1; k < 4; k++) {
      distances.push(getSquaredDist(points[j], points[k]));
    }
  }

  distances.sort((a, b) => a - b);

  const [d1, d2, d3, d4, d5, d6] = distances;

  if (
    d1 > 0 &&
    d1 === d2 &&
    d2 === d3 &&
    d3 === d4 &&
    d5 === d6 &&
    d1 * 2 === d5
  ) {
    results.push(1);
  } else {
    results.push(0);
  }
}

console.log(results.join('\n'));
