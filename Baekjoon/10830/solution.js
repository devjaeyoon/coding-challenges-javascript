const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [strN, strB] = input.shift().split(' ');
const N = Number(strN);
const B = BigInt(strB);

const A = input.map((line) => line.split(' ').map((val) => Number(val) % 1000));

function multiplyMatrix(matrix1, matrix2) {
  const result = Array.from(Array(N), () => new Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
      result[i][j] %= 1000;
    }
  }

  return result;
}

function powerMatrix(matrix, exp) {
  if (exp === 1n) {
    return matrix;
  }

  const half = powerMatrix(matrix, exp / 2n);
  const squared = multiplyMatrix(half, half);

  if (exp % 2n === 0n) {
    return squared;
  } else {
    return multiplyMatrix(squared, A);
  }
}

const resultMatrix = powerMatrix(A, B);
console.log(resultMatrix.map((row) => row.join(' ')).join('\n'));
