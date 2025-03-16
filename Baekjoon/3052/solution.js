const numbers = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const remainders = [];

for (const number of numbers) {
  remainders.push(number % 42);
}

console.log(new Set(remainders).size);
