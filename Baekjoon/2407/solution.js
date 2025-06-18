const [n, m] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function getCombination(n, r) {
  if (r > n / 2) {
    r = n - r;
  }

  let result = 1n;

  for (let i = 0; i < r; i++) {
    result *= BigInt(n - i);
    result /= BigInt(i + 1);
  }

  return result.toString();
}

console.log(getCombination(n, m));
