const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const K = input[1];

let count = 0;

for (let i = 0; i < N; i++) {
  if (K[i] === '1') {
    count += 1;
  }
}

console.log(count);
