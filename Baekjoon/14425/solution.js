const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const S = new Map();
const [N, M] = input.shift().split(' ').map(Number);

for (let i = 0; i < N; i++) {
  S.set(input[i]);
}

let count = 0;

for (let i = N; i < N + M; i++) {
  if (S.has(input[i])) {
    count++;
  }
}

console.log(count);
