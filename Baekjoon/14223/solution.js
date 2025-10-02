const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const points = input.map((line) => {
  const [x, y] = line.split(' ').map(Number);

  return { x, y };
});

function getMinSquareArea(targetPoints) {
  if (targetPoints.length === 0) {
    return Infinity;
  }

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  for (const point of targetPoints) {
    minX = Math.min(minX, point.x);
    maxX = Math.max(maxX, point.x);
    minY = Math.min(minY, point.y);
    maxY = Math.max(maxY, point.y);
  }

  const sideX = BigInt(maxX - minX + 2);
  const sideY = BigInt(maxY - minY + 2);

  const side = sideX > sideY ? sideX : sideY;

  return side * side;
}

let minArea = Infinity;

minArea = getMinSquareArea(points);

if (N > 1) {
  for (let i = 0; i < N; i++) {
    const targetPoints = points.filter((_, index) => index !== i);
    const area = getMinSquareArea(targetPoints);
    if (area < minArea) {
      minArea = area;
    }
  }
}

if (N > 2) {
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const targetPoints = points.filter(
        (_, index) => index !== i && index !== j
      );
      const area = getMinSquareArea(targetPoints);
      if (area < minArea) {
        minArea = area;
      }
    }
  }
}

console.log(minArea.toString());
