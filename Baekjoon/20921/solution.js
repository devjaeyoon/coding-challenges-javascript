const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(' ');

const N = Number(input[0]);
let K = Number(input[1]);

const output = [];

let min = 1;
let max = N;

for (let i = 0; i < N; i++) {
  const limit = N - 1 - i;

  if (K >= limit) {
    output.push(max);
    max--;
    K -= limit;
  } else {
    output.push(min);
    min++;
  }
}

console.log(output.join(' '));
