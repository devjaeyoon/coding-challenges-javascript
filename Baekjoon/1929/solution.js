const [M, N] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function isPrimeNumber(num) {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

const primeNumbers = [];

for (let i = M; i <= N; i++) {
  if (isPrimeNumber(i)) {
    primeNumbers.push(i);
  }
}

console.log(primeNumbers.join('\n'));
