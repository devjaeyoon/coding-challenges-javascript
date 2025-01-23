const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(a, b) {
  let count = 1;

  while (b > a) {
    count += 1;

    if (b % 2 === 0) {
      b /= 2;
    } else if (b % 10 === 1) {
      b = Math.floor(b / 10);
    } else {
      return -1;
    }
  }

  return b === a ? count : -1;
}

console.log(solution(A, B));
