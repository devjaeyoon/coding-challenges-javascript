const [A, B] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(BigInt);

const sqrtB = BigInt(Math.floor(Math.sqrt(Number(B))));
const MAX = Number(sqrtB) + 1;

const isPrime = Array(MAX).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i * i < MAX; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j < MAX; j += i) {
      isPrime[j] = false;
    }
  }
}

const primes = [];

for (let i = 2; i < MAX; i++) {
  if (isPrime[i]) {
    primes.push(BigInt(i));
  }
}

let count = 0;

for (const prime of primes) {
  let number = prime * prime;

  while (number <= B) {
    if (number >= A) {
      count++;
    }

    number *= prime;
  }
}

console.log(count);
