const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const times = input[1].split(' ').map(Number);

let left = 0;
let right = 0;

let minTime = times[0];
for (let i = 1; i < N; i++) {
  if (times[i] < minTime) {
    minTime = times[i];
  }
}

right = minTime * M;

let answer = right;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  let count = 0;
  for (let i = 0; i < N; i++) {
    count += Math.floor(mid / times[i]);

    if (count >= M) {
      break;
    }
  }

  if (count >= M) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
