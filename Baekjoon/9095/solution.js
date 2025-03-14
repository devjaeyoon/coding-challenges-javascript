const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const T = input[0];

const cases = [0, 1, 2, 4];

for (let i = 4; i <= 10; i++) {
  cases.push(cases[i - 1] + cases[i - 2] + cases[i - 3]);
}

for (let i = 1; i <= T; i++) {
  console.log(cases[input[i]]);
}
