const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const output = [];

for (let i = 0; i < input.length; i++) {
  let [n, k] = input[i].split(' ').map(Number);

  if (n === 0 && k === 0) {
    break;
  }

  if (k > n - k) {
    k = n - k;
  }

  let result = 1n;
  let currentN = BigInt(n);

  for (let j = 1n; j <= BigInt(k); j++) {
    result = result * currentN;
    result = result / j;
    currentN--;
  }

  output.push(result.toString());
}

console.log(output.join('\n'));
