const X = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(num) {
  if (num[0] === '0' && num[1] === 'x') {
    return parseInt(X, 16);
  }

  if (num[0] === '0') {
    return parseInt(X, 8);
  }

  return Number(num);
}

console.log(solution(X));
