const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const S = input[0];
let T = input[1];

function solution(S, T) {
  while (S.length !== T.length) {
    if (T[T.length - 1] === 'A') {
      T = T.slice(0, -1);
    } else if (T[T.length - 1] === 'B') {
      T = T.slice(0, -1).split('').reverse().join('');
    }
  }

  if (S === T) {
    return console.log(1);
  }
  if (S !== T) {
    return console.log(0);
  }
}

solution(S, T);
