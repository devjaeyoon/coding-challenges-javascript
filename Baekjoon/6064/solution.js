const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

const answers = [];

for (let i = 0; i < T; i++) {
  const [M, N, x, y] = input[i].split(' ').map(Number);

  const lastYear = (M * N) / gcd(M, N);
  let year = -1;

  for (let k = x; k <= lastYear; k += M) {
    const currentY = ((k - 1) % N) + 1;

    if (currentY === y) {
      year = k;
      break;
    }
  }

  answers.push(year);
}

console.log(answers.join('\n'));
