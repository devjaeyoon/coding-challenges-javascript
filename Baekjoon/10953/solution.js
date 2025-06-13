const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const [A, B] = input[i].split(',').map(Number);

  console.log(A + B);
}
