const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(' ').map(Number);

  console.log(A + B);
}
