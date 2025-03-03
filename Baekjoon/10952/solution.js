const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (const lines of input) {
  const [A, B] = lines.split(' ').map(Number);

  if (A === 0 && B === 0) {
    break;
  }

  console.log(A + B);
}
