const [M, N] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function isPrimeNumber(num) {
  if (num < 2) {
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

if (primeNumbers.length !== 0) {
  console.log(primeNumbers.reduce((acc, cur) => acc + cur, 0));
  console.log(primeNumbers[0]);
} else {
  console.log(-1);
}
