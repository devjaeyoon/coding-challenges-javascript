function canDivide(targetScore) {
  let count = 0;
  let currentSum = 0;

  for (let i = 0; i < N; i++) {
    currentSum += scores[i];

    if (currentSum >= targetScore) {
      count++;
      currentSum = 0;
    }
  }

  return count >= K;
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);
const scores = input[1].split(' ').map(Number);

let left = 0;
let right = scores.reduce((acc, cur) => acc + cur, 0);
let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (canDivide(mid)) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);
