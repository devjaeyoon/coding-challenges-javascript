const S = Number(require('fs').readFileSync('/dev/stdin').toString());

let current = 0;
let N = 0;

while (current < S) {
  N += 1;
  current += N;
  if (current > S) {
    N -= 1;
  }
}

console.log(N);
