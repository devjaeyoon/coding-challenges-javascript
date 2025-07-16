const [K, M] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function getPermutations(arr, k) {
  const results = [];

  const recur = (path, used) => {
    if (path.length === k) {
      results.push([...path]);

      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (used[i]) {
        continue;
      }
      used[i] = true;
      path.push(arr[i]);
      recur(path, used);
      path.pop();
      used[i] = false;
    }
  };

  recur([], Array(arr.length).fill(false));

  return results;
}

function sieve(limit) {
  const prime = Array(limit + 1).fill(true);
  prime[0] = prime[1] = false;

  for (let i = 2; i * i <= limit; i++) {
    if (prime[i]) {
      for (let j = i * i; j <= limit; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime;
}

function isSumOfTwoDistinctPrimes(n) {
  for (const p of primeList) {
    const other = n - p;

    if (p !== other && primeSet.has(other)) {
      return true;
    }
    if (p > n) {
      break;
    }
  }

  return false;
}

function isProductOfTwoPrimesAfterDividing(n, M) {
  while (n % M === 0) {
    n = Math.floor(n / M);
  }

  for (const p of primeList) {
    if (p * p > n) {
      break;
    }
    if (n % p === 0) {
      const other = n / p;

      if (primeSet.has(other)) {
        return true;
      }
    }
  }

  return false;
}

const digits = [...Array(10).keys()];
const permutations = getPermutations(digits, K);
let count = 0;

const MAX_PRIME = 100000;
const isPrimeTable = sieve(MAX_PRIME);
const primeList = isPrimeTable
  .map((v, i) => (v ? i : -1))
  .filter((v) => v !== -1);
const primeSet = new Set(primeList);

for (const perm of permutations) {
  if (perm[0] === 0) {
    continue;
  }

  const num = Number(perm.join(''));
  if (
    isSumOfTwoDistinctPrimes(num) &&
    isProductOfTwoPrimesAfterDividing(num, M)
  ) {
    count += 1;
  }
}

console.log(count);
