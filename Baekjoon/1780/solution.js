const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const paper = input.map((row) => row.trim().split(' ').map(Number));

let countMinus = 0;
let countZero = 0;
let countPlus = 0;

function isUniform(row, col, size) {
  const startValue = paper[row][col];

  for (let i = row; i < row + size; i++) {
    for (let j = col; j < col + size; j++) {
      if (paper[i][j] !== startValue) {
        return false;
      }
    }
  }

  return true;
}

function cutPaper(row, col, size) {
  if (isUniform(row, col, size)) {
    const value = paper[row][col];

    if (value === -1) {
      countMinus++;
    } else if (value === 0) {
      countZero++;
    } else {
      countPlus++;
    }

    return;
  }

  const newSize = size / 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      cutPaper(row + i * newSize, col + j * newSize, newSize);
    }
  }
}

cutPaper(0, 0, N);

console.log(countMinus);
console.log(countZero);
console.log(countPlus);
