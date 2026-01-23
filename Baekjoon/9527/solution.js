function getOneCount(n) {
  if (n < 0n) return 0n;

  let count = 0n;
  let i = 0n;

  while (1n << i <= n) {
    const period = 1n << (i + 1n);
    const halfPeriod = 1n << i;

    const totalNums = n + 1n;

    const fullCycles = totalNums / period;

    const remainder = totalNums % period;

    count +=
      fullCycles * halfPeriod +
      (remainder > halfPeriod ? remainder - halfPeriod : 0n);

    i++;
  }

  return count;
}

const [A, B] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(BigInt);

const result = getOneCount(B) - getOneCount(A - 1n);

console.log(result.toString());
