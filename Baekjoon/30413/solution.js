const [A, B] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(BigInt);

const MOD = 1000000007n;

function power(base, exp) {
  let res = 1n;
  base = base % MOD;

  while (exp > 0n) {
    if (exp % 2n === 1n) {
      res = (res * base) % MOD;
    }
    base = (base * base) % MOD;
    exp /= 2n;
  }

  return res;
}

if (A === 1n) {
  console.log((B % MOD).toString());
} else {
  const numerator = (power(A, B) - 1n + MOD) % MOD;
  const denominator = power(A - 1n, MOD - 2n);

  const result = (numerator * denominator) % MOD;

  console.log(result.toString());
}
