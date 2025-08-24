const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const lines = [];

for (let i = 0; i < N; i++) {
  const [start, end] = input[i].split(' ').map(Number);

  lines.push({ coord: start, type: 1 });
  lines.push({ coord: end, type: -1 });
}

lines.sort((a, b) => {
  if (a.coord !== b.coord) {
    return a.coord - b.coord;
  }

  return a.type - b.type;
});

let maxOverlap = 0;
let currentOverlap = 0;

for (const line of lines) {
  currentOverlap += line.type;

  if (currentOverlap > maxOverlap) {
    maxOverlap = currentOverlap;
  }
}

console.log(maxOverlap);
