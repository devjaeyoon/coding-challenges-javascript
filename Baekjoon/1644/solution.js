const N = Number(require('fs').readFileSync('/dev/stdin').toString());

if (N === 1) {
  console.log(0);
} else {
  const isPrime = new Array(N + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= N; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= N; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const primes = [];
  for (let i = 2; i <= N; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  const primesLength = primes.length;
  let count = 0;
  let sum = 0;
  let left = 0;
  let right = 0;

  while (true) {
    if (sum >= N) {
      sum -= primes[left];
      left++;
    } else if (right === primesLength) {
      break;
    } else {
      sum += primes[right];
      right++;
    }

    if (sum === N) {
      count++;
    }
  }

  console.log(count);
}
