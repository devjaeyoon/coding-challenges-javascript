const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);

const bitCounts = new Array(20).fill(0);
for (let i = 1; i <= N; i++) {
  let num = Number(input[i]);
  let bitIndex = 0;

  while (num > 0) {
    if (num & 1) {
      bitCounts[bitIndex]++;
    }
    num >>= 1;
    bitIndex++;
  }
}

const bigN = BigInt(N);
let totalSum = 0n;

for (let i = 0; i < 20; i++) {
  const ones = BigInt(bitCounts[i]);
  const zeros = bigN - ones;

  totalSum += ones * zeros * (1n << BigInt(i));
}

console.log(totalSum.toString());
