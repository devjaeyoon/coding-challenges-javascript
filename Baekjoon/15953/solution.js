const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());

function calculatePriceFirstCodeFestival(rank) {
  if (rank === 1) {
    return 5000000;
  }
  if (rank >= 2 && rank <= 3) {
    return 3000000;
  }
  if (rank >= 4 && rank <= 6) {
    return 2000000;
  }
  if (rank >= 7 && rank <= 10) {
    return 500000;
  }
  if (rank >= 11 && rank <= 15) {
    return 300000;
  }
  if (rank >= 16 && rank <= 21) {
    return 100000;
  }

  return 0;
}

function calculatePriceSecondCodeFestival(rank) {
  if (rank === 1) {
    return 5120000;
  }
  if (rank >= 2 && rank <= 3) {
    return 2560000;
  }
  if (rank >= 4 && rank <= 7) {
    return 1280000;
  }
  if (rank >= 8 && rank <= 15) {
    return 640000;
  }
  if (rank >= 16 && rank <= 31) {
    return 320000;
  }

  return 0;
}

for (let i = 0; i < T; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  let totalPrice = 0;

  totalPrice += calculatePriceFirstCodeFestival(a);
  totalPrice += calculatePriceSecondCodeFestival(b);

  console.log(totalPrice);
}
