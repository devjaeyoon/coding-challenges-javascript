function getPrimes(start, end) {
  const primes = new Set();

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.add(i);
    }
  }

  return primes;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [A, B] = input[0].split(' ').map(Number);
const [C, D] = input[1].split(' ').map(Number);

const ytPrimes = getPrimes(A, B);
const yjPrimes = getPrimes(C, D);

let commonCount = 0;
let ytOnlyCount = 0;
let yjOnlyCount = 0;

ytPrimes.forEach((num) => {
  if (yjPrimes.has(num)) {
    commonCount++;
  } else {
    ytOnlyCount++;
  }
});

yjPrimes.forEach((num) => {
  if (!ytPrimes.has(num)) {
    yjOnlyCount++;
  }
});

if (commonCount % 2 === 1) {
  if (ytOnlyCount >= yjOnlyCount) {
    console.log('yt');
  } else {
    console.log('yj');
  }
} else {
  if (ytOnlyCount > yjOnlyCount) {
    console.log('yt');
  } else {
    console.log('yj');
  }
}
