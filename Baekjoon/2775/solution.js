const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const apartment = Array.from({ length: 15 }, () => new Array(15).fill(0));

for (let i = 1; i <= 14; i++) {
  apartment[0][i] = i;
}

for (let i = 1; i <= 14; i++) {
  for (let j = 1; j <= 14; j++) {
    apartment[i][j] = apartment[i][j - 1] + apartment[i - 1][j];
  }
}

const T = input[0];

for (let i = 1; i <= T * 2; i += 2) {
  const k = input[i];
  const n = input[i + 1];
  console.log(apartment[k][n]);
}
