const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [NStr, MStr] = input[0].trim().split(' ');
const N = Number(NStr);
const M = BigInt(MStr);

const times = [];
let minTime = BigInt(1000000000);

for (let i = 1; i <= N; i++) {
  const time = BigInt(input[i].trim());

  times.push(time);

  if (time < minTime) {
    minTime = time;
  }
}

let low = 1n;
let high = minTime * M;
let answer = high;

while (low <= high) {
  let mid = (low + high) / 2n;
  let count = 0n;

  for (let i = 0; i < N; i++) {
    count += mid / times[i];

    if (count >= M) {
      break;
    }
  }

  if (count >= M) {
    answer = mid;
    high = mid - 1n;
  } else {
    low = mid + 1n;
  }
}

console.log(answer.toString());
