const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [nStr, kStr] = input.shift().split(' ');
const n = Number(nStr);
const k = BigInt(kStr);

const valueCounts = new Map();

for (let i = 0; i < n; i++) {
  const [x, y] = input[i].split(' ').map(BigInt);
  const value = y - k * x;
  valueCounts.set(value, (valueCounts.get(value) || 0n) + 1n);
}

let totalPairs = 0n;

for (const m of valueCounts.values()) {
  if (m > 1n) {
    const pairs = m * (m - 1n);
    totalPairs += pairs;
  }
}

console.log(totalPairs.toString());
