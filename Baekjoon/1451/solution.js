const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ');
const rect = input.map((row) => row.split('').map(Number));

function getSum(x1, y1, x2, y2) {
  let sum = 0n;

  for (let i = x1; i <= x2; i++) {
    for (let j = y1; j <= y2; j++) {
      sum += BigInt(rect[i][j]);
    }
  }

  return sum;
}

let maxProduct = 0n;

for (let i = 0; i < M - 2; i++) {
  for (let j = i + 1; j < M - 1; j++) {
    const s1 = getSum(0, 0, N - 1, i);
    const s2 = getSum(0, i + 1, N - 1, j);
    const s3 = getSum(0, j + 1, N - 1, M - 1);
    const product = s1 * s2 * s3;

    if (product > maxProduct) {
      maxProduct = product;
    }
  }
}

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    const s1 = getSum(0, 0, i, M - 1);
    const s2 = getSum(i + 1, 0, j, M - 1);
    const s3 = getSum(j + 1, 0, N - 1, M - 1);
    const product = s1 * s2 * s3;

    if (product > maxProduct) {
      maxProduct = product;
    }
  }
}

for (let i = 0; i < N - 1; i++) {
  for (let j = 0; j < M - 1; j++) {
    const s1 = getSum(0, 0, i, j);
    const s2 = getSum(0, j + 1, i, M - 1);
    const s3 = getSum(i + 1, 0, N - 1, M - 1);
    const product = s1 * s2 * s3;

    if (product > maxProduct) {
      maxProduct = product;
    }
  }
}

for (let i = 0; i < N - 1; i++) {
  for (let j = 0; j < M - 1; j++) {
    const s1 = getSum(0, 0, i, M - 1);
    const s2 = getSum(i + 1, 0, N - 1, j);
    const s3 = getSum(i + 1, j + 1, N - 1, M - 1);
    const product = s1 * s2 * s3;

    if (product > maxProduct) {
      maxProduct = product;
    }
  }
}

for (let i = 0; i < M - 1; i++) {
  for (let j = 0; j < N - 1; j++) {
    const s1 = getSum(0, 0, j, i);
    const s2 = getSum(j + 1, 0, N - 1, i);
    const s3 = getSum(0, i + 1, N - 1, M - 1);
    const product = s1 * s2 * s3;

    if (product > maxProduct) {
      maxProduct = product;
    }
  }
}

for (let i = 0; i < M - 1; i++) {
  for (let j = 0; j < N - 1; j++) {
    const s1 = getSum(0, 0, N - 1, i);
    const s2 = getSum(0, i + 1, j, M - 1);
    const s3 = getSum(j + 1, i + 1, N - 1, M - 1);
    const product = s1 * s2 * s3;

    if (product > maxProduct) {
      maxProduct = product;
    }
  }
}

console.log(maxProduct.toString());
