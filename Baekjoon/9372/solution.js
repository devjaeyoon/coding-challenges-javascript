const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const T = parseInt(input[0]);
let line = 1;

for (let i = 0; i < T; i++) {
  const [N, M] = input[line++].split(' ').map(Number);

  for (let j = 0; j < M; j++) {
    line += 1;
  }

  console.log(N - 1);
}
