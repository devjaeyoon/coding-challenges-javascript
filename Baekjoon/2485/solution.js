const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const positions = input.map(Number);

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const intervals = [];
for (let i = 0; i < N - 1; i++) {
  intervals.push(positions[i + 1] - positions[i]);
}

let finalGcd = intervals[0];
for (let i = 1; i < intervals.length; i++) {
  finalGcd = gcd(finalGcd, intervals[i]);
}

let treesToAdd = 0;
for (let i = 0; i < intervals.length; i++) {
  treesToAdd += intervals[i] / finalGcd - 1;
}

console.log(treesToAdd);
