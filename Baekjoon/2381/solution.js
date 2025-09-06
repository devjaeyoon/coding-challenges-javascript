const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function getMaximumDistance(coordinates) {
  if (coordinates.length < 2) {
    return 0;
  }

  let max_u = -Infinity;
  let min_u = Infinity;
  let max_v = -Infinity;
  let min_v = Infinity;

  for (const coordinate of coordinates) {
    const [x, y] = coordinate;
    const u = x + y;
    const v = x - y;

    if (u > max_u) {
      max_u = u;
    }
    if (u < min_u) {
      min_u = u;
    }
    if (v > max_v) {
      max_v = v;
    }
    if (v < min_v) {
      min_v = v;
    }
  }

  const maxDist = Math.max(max_u - min_u, max_v - min_v);

  return maxDist;
}

const N = Number(input.shift());
const coordinates = input.map((line) => line.split(' ').map(Number));

console.log(getMaximumDistance(coordinates));
