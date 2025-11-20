const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const S = input[1];

let balance = 0;
let maxDepth = 0;

for (let i = 0; i < N; i++) {
  if (S[i] === '(') {
    balance++;
  } else {
    balance--;
  }

  if (Math.abs(balance) > maxDepth) {
    maxDepth = Math.abs(balance);
  }
}

if (balance !== 0) {
  console.log(-1);
} else {
  console.log(maxDepth);
}
