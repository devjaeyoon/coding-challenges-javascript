const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const sum = String(input.reduce((acc, cur) => acc * cur));

const numberCounts = new Array(10).fill(0);

for (const number of sum) {
  numberCounts[number] += 1;
}

console.log(numberCounts.join('\n'));
