const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const MAX = 1000001;
const isPrime = new Array(MAX).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i * i < MAX; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j < MAX; j += i) {
      isPrime[j] = false;
    }
  }
}

const result = [];

for (let i = 0; i < input.length - 1; i++) {
  const n = input[i];
  let found = false;

  for (let a = 3; a <= n / 2; a += 2) {
    if (isPrime[a] && isPrime[n - a]) {
      result.push(`${n} = ${a} + ${n - a}`);
      found = true;
      break;
    }
  }

  if (!found) {
    result.push("Goldbach's conjecture is wrong.");
  }
}

console.log(result.join('\n'));
