let [N, K] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let answer = 0;

function countSetBits(n) {
  let count = 0;

  while (n > 0) {
    n &= n - 1;
    count++;
  }

  return count;
}

while (true) {
  if (countSetBits(N) <= K) {
    break;
  }

  N++;
  answer++;
}

console.log(answer);
