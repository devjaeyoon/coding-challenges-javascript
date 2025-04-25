const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (const line of input) {
  const [a, b, c] = line
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  if (a === 0 && b === 0 && c === 0) {
    break;
  }

  if (a + b <= c) {
    console.log('Invalid');
    continue;
  }

  if (a === b && b === c) {
    console.log('Equilateral');
  } else if (
    (a === b && a !== c) ||
    (a === c && a !== b) ||
    (b === c && a !== b)
  ) {
    console.log('Isosceles');
  } else {
    console.log('Scalene');
  }
}
