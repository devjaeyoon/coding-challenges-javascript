const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const numberCards = new Set(input[1].split(' ').map(Number));
const numbers = input[3].split(' ').map(Number);
const results = numbers.map((number) => (numberCards.has(number) ? 1 : 0));

console.log(results.join(' '));
