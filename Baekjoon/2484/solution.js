const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());

function calculatePrize(input) {
  const counts = {};

  for (const dice of input) {
    counts[dice] = (counts[dice] || 0) + 1;
  }

  const entries = Object.entries(counts).map(([key, value]) => [
    Number(key),
    value,
  ]);
  entries.sort((a, b) => b[1] - a[1] || b[0] - a[0]);

  if (entries[0][1] === 4) {
    return 50000 + entries[0][0] * 5000;
  } else if (entries[0][1] === 3) {
    return 10000 + entries[0][0] * 1000;
  } else if (entries[0][1] === 2 && entries[1] && entries[1][1] === 2) {
    return 2000 + entries[0][0] * 500 + entries[1][0] * 500;
  } else if (entries[0][1] === 2) {
    return 1000 + entries[0][0] * 100;
  } else {
    return Math.max(...input) * 100;
  }
}

const prizes = [];

for (let i = 0; i < N; i++) {
  const result = input[i].split(' ').map(Number);

  prizes.push(calculatePrize(result));
}

console.log(Math.max(...prizes));
