const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const points = [];

for (let i = 0; i < N; i++) {
  points.push(input[i].trim().split(' ').map(Number));
}

function getGCD(a, b) {
  return b === 0 ? a : getGCD(b, a % b);
}

let rightTriangles = 0;

for (let i = 0; i < N; i++) {
  const vectors = new Map();
  const [x1, y1] = points[i];

  for (let j = 0; j < N; j++) {
    if (i === j) continue;

    const [x2, y2] = points[j];
    let dx = x2 - x1;
    let dy = y2 - y1;

    const gcd = getGCD(Math.abs(dx), Math.abs(dy));
    dx /= gcd;
    dy /= gcd;

    const key = `${dx},${dy}`;
    vectors.set(key, (vectors.get(key) || 0) + 1);
  }

  for (const [key, count] of vectors) {
    const [dx, dy] = key.split(',').map(Number);
    const targetKey = `${-dy},${dx}`;

    if (vectors.has(targetKey)) {
      rightTriangles += count * vectors.get(targetKey);
    }
  }
}

console.log(rightTriangles);
