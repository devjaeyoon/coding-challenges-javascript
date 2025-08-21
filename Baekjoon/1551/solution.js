const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const sequence = input[0].split(',').map(Number);

function combine(n, k) {
  if (k < 0 || k > n) {
    return 0;
  }
  if (k === 0 || k === n) {
    return 1;
  }

  let res = 1;

  for (let i = 1; i <= k; i++) {
    res *= n - i + 1;
    res /= i;
  }

  return res;
}

if (K === 0) {
  console.log(sequence.join(','));
}

if (K !== 0) {
  const result = [];

  for (let i = 0; i <= N - K - 1; i++) {
    let sum = 0;

    for (let j = 0; j <= K; j++) {
      sum += ((K - j) % 2 === 0 ? 1 : -1) * combine(K, j) * sequence[i + j];
    }

    result.push(sum);
  }

  console.log(result.join(','));
}
