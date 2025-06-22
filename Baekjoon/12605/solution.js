const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());

for (let i = 0; i < N; i++) {
  const words = input[i].split(' ');

  console.log(`Case #${i + 1}: ` + words.reverse().join(' '));
}
