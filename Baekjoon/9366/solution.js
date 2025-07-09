const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const [a, b, c] = input[i]
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);

  if (a >= b + c) {
    console.log(`Case #${i + 1}: invalid!`);
    continue;
  }

  if (a === b && b === c) {
    console.log(`Case #${i + 1}: equilateral`);
    continue;
  }

  if (a === b || b === c || a === c) {
    console.log(`Case #${i + 1}: isosceles`);
    continue;
  }

  console.log(`Case #${i + 1}: scalene`);
}
