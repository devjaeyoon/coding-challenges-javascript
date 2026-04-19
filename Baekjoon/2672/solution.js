const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());

const rectangles = [];
const xSet = new Set();
const ySet = new Set();

for (let i = 0; i < N; i++) {
  const [x, y, width, height] = input[i].split(' ').map(Number);

  const x1 = Math.round(x * 10);
  const y1 = Math.round(y * 10);
  const x2 = x1 + Math.round(width * 10);
  const y2 = y1 + Math.round(height * 10);

  rectangles.push({ x1, y1, x2, y2 });
  xSet.add(x1);
  xSet.add(x2);
  ySet.add(y1);
  ySet.add(y2);
}

const xCoords = Array.from(xSet).sort((a, b) => a - b);
const yCoords = Array.from(ySet).sort((a, b) => a - b);

const grid = Array.from({ length: xCoords.length }, () =>
  Array(yCoords.length).fill(false),
);

for (const rect of rectangles) {
  const startX = xCoords.indexOf(rect.x1);
  const endX = xCoords.indexOf(rect.x2);
  const startY = yCoords.indexOf(rect.y1);
  const endY = yCoords.indexOf(rect.y2);

  for (let i = startX; i < endX; i++) {
    for (let j = startY; j < endY; j++) {
      grid[i][j] = true;
    }
  }
}

let totalArea = 0;

for (let i = 0; i < xCoords.length - 1; i++) {
  for (let j = 0; j < yCoords.length - 1; j++) {
    if (grid[i][j]) {
      totalArea +=
        (xCoords[i + 1] - xCoords[i]) * (yCoords[j + 1] - yCoords[j]);
    }
  }
}

if (totalArea % 100 === 0) {
  console.log(totalArea / 100);
} else {
  console.log((totalArea / 100).toFixed(2));
}
