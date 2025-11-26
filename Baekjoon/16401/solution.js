const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [M, N] = input[0].split(' ').map(Number);
const snackLengths = input[1].split(' ').map(Number);

let low = 1;
let high = Math.max(...snackLengths);
let answer = 0;

while (low <= high) {
  const mid = Math.floor((low + high) / 2);

  let count = 0;
  for (let i = 0; i < N; i++) {
    count += Math.floor(snackLengths[i] / mid);
  }

  if (count >= M) {
    answer = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(answer);
