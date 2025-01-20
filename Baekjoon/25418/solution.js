const [A, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let cnt = 0;
let current = K;

while (current > A) {
  if (current % 2 === 0 && current >= A * 2) {
    current /= 2;
  } else {
    current--;
  }
  cnt++;
}

console.log(cnt);
