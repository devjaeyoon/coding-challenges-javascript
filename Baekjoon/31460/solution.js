const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());
const results = [];

for (let i = 0; i < T; i++) {
  const N = Number(input[i]);

  if (N === 1) {
    results.push('0');
  } else if (N % 2 === 0) {
    results.push('1'.repeat(N));
  } else {
    const k = Math.floor(N / 2);
    if (k % 2 === 1) {
      results.push('1'.repeat(k) + '2' + '1'.repeat(k));
    } else {
      results.push('1'.repeat(k) + '0' + '1'.repeat(k));
    }
  }
}

console.log(results.join('\n'));
