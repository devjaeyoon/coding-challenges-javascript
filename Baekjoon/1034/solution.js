const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const table = input.slice(0, N);
const K = Number(input[N]);
const patternMap = new Map();

for (const row of table) {
  patternMap.set(row, (patternMap.get(row) || 0) + 1);
}

let maxOnRows = 0;

for (const [pattern, count] of patternMap.entries()) {
  const zeroCount = [...pattern].filter((c) => c === '0').length;

  if (zeroCount <= K && (K - zeroCount) % 2 === 0) {
    maxOnRows = Math.max(maxOnRows, count);
  }
}

console.log(maxOnRows);
