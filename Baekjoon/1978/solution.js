const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const numbers = input[1].split(' ').map(Number);

function isPrimeNumber(num) {
  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

const primeNumberCount = numbers.filter(isPrimeNumber).length;

console.log(primeNumberCount);
