const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

let left = 0;
let right = 10000;
let answer = right;

const isValid = (limit) => {
  let count = 1;
  let min = numbers[0];
  let max = numbers[0];

  for (let i = 1; i < N; i++) {
    const currentMin = Math.min(min, numbers[i]);
    const currentMax = Math.max(max, numbers[i]);

    if (currentMax - currentMin > limit) {
      count++;
      min = numbers[i];
      max = numbers[i];
    } else {
      min = currentMin;
      max = currentMax;
    }
  }

  return count <= M;
};

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (isValid(mid)) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
