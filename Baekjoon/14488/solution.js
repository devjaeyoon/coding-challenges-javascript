const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [nStr, tStr] = input[0].split(' ');
const N = Number(nStr);

const parts = tStr.split('.');
const integerPart = parts[0];
const fractionalPart = (parts[1] || '').padEnd(4, '0');
const scaledT = BigInt(integerPart + fractionalPart);

const studentPositions = input[1].split(' ').map(BigInt);
const studentVelocities = input[2].split(' ').map(BigInt);

const scale = 10000n;

let maxLeft = -(10n ** 25n);
let minRight = 10n ** 25n;

for (let i = 0; i < N; i++) {
  const position = studentPositions[i] * scale;
  const velocity = studentVelocities[i];

  const distance = velocity * scaledT;

  const leftBound = position - distance;
  const rightBound = position + distance;

  if (leftBound > maxLeft) {
    maxLeft = leftBound;
  }
  if (rightBound < minRight) {
    minRight = rightBound;
  }
}

if (maxLeft <= minRight) {
  console.log(1);
} else {
  console.log(0);
}
