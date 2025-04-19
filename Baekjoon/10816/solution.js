const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const numbers = input[1].split(' ').map(Number);
const findingNumbers = input[3].split(' ').map(Number);
const numbersCount = new Map();

for (const number of numbers) {
  numbersCount.set(number, (numbersCount.get(number) || 0) + 1);
}

const output = findingNumbers.map((num) => numbersCount.get(num) || 0);

console.log(output.join(' '));
