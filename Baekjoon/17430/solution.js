const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());
const results = [];
let lineIndex = 0;

for (let t = 0; t < T; t++) {
  const N = Number(input[lineIndex++]);

  const xCoords = new Set();
  const yCoords = new Set();

  for (let i = 0; i < N; i++) {
    const [x, y] = input[lineIndex++].split(' ').map(Number);
    xCoords.add(x);
    yCoords.add(y);
  }

  const nx = xCoords.size;
  const ny = yCoords.size;

  if (N === nx * ny) {
    results.push('BALANCED');
  } else {
    results.push('NOT BALANCED');
  }
}

console.log(results.join('\n'));
