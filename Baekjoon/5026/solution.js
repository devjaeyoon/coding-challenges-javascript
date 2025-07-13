const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());

for (let i = 0; i < N; i++) {
  if (input[i] === 'P=NP') {
    console.log('skipped');
    continue;
  }

  const [num1, num2] = input[i].split('+').map(Number);

  console.log(num1 + num2);
}
