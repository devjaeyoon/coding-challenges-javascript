const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const [A, B] = input.shift().split(' ');

const strokeCounts = {
  A: 3,
  B: 2,
  C: 1,
  D: 2,
  E: 4,
  F: 3,
  G: 1,
  H: 3,
  I: 1,
  J: 1,
  K: 3,
  L: 1,
  M: 3,
  N: 2,
  O: 1,
  P: 2,
  Q: 2,
  R: 2,
  S: 1,
  T: 2,
  U: 1,
  V: 1,
  W: 1,
  X: 2,
  Y: 2,
  Z: 1,
};

const minLen = Math.min(N, M);
let combinedString = '';

for (let i = 0; i < minLen; i++) {
  combinedString += A[i];
  combinedString += B[i];
}

combinedString += A.substring(minLen);
combinedString += B.substring(minLen);

let numbers = combinedString.split('').map((char) => strokeCounts[char]);

while (numbers.length > 2) {
  const nextNumbers = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    const sum = numbers[i] + numbers[i + 1];
    nextNumbers.push(sum % 10);
  }
  numbers = nextNumbers;
}

const result = `${numbers[0] === 0 ? '' : numbers[0]}${numbers[1]}%`;

console.log(result);
