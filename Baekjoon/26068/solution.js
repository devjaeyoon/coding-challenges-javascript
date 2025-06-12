const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
let count = 0;

for (let i = 0; i < N; i++) {
  if (Number(input[i].slice(2)) <= 90) {
    count += 1;
  }
}

console.log(count);
