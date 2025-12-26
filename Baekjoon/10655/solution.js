const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());

const points = input.map((line) => line.split(' ').map(Number));

function getDist(idx1, idx2) {
  const xDiff = Math.abs(points[idx1][0] - points[idx2][0]);
  const yDiff = Math.abs(points[idx1][1] - points[idx2][1]);

  return xDiff + yDiff;
}

let totalDistance = 0;
for (let i = 0; i < N - 1; i++) {
  totalDistance += getDist(i, i + 1);
}

let maxSkip = 0;
for (let i = 1; i < N - 1; i++) {
  const originalDist = getDist(i - 1, i) + getDist(i, i + 1);
  const skipDist = getDist(i - 1, i + 1);
  const diff = originalDist - skipDist;

  if (diff > maxSkip) {
    maxSkip = diff;
  }
}

console.log(totalDistance - maxSkip);
