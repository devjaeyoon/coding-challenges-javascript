const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, L] = input.shift().split(' ').map(Number);
const points = input.map(Number);

const arr = [];
let minusCount = 0;
let plusMax = 0;
let minusMax = 0;

for (let i = 0; i < N; i++) {
  const p = points[i];

  if (p >= 0) {
    plusMax = Math.max(plusMax, L - p);
  } else {
    minusCount++;
    minusMax = Math.max(minusMax, Math.abs(p));
  }

  arr.push({ i: i + 1, abs: Math.abs(p) });
}

arr.sort((a, b) => a.abs - b.abs);

if (plusMax > minusMax) {
  console.log(`${arr[minusCount].i} ${plusMax}`);
} else {
  console.log(`${arr[minusCount - 1].i} ${minusMax}`);
}
