const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const trees = input[0].split(' ').map(Number);

let start = 0;
let end = Math.max(...trees);
let result = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  const total = trees.reduce((acc, tree) => {
    if (tree > mid) {
      return acc + (tree - mid);
    } else {
      return acc;
    }
  }, 0);

  if (total >= M) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
