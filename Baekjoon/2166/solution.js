const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const coordinates = input.map((line) => line.split(' ').map(Number));
let sum = 0;

for (let i = 0; i < N; i++) {
  const [x1, y1] = coordinates[i];
  const [x2, y2] = coordinates[(i + 1) % N];

  sum += x1 * y2 - x2 * y1;
}

const area = Math.abs(sum) / 2;

console.log(area.toFixed(1));
