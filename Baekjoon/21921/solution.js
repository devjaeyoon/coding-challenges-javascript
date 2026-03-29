const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, X] = input[0].split(' ').map(Number);
const visitCount = input[1].split(' ').map(Number);

let currentSum = 0;
for (let i = 0; i < X; i++) {
  currentSum += visitCount[i];
}

let maxSum = currentSum;
let maxCount = 1;

for (let i = X; i < N; i++) {
  currentSum = currentSum - visitCount[i - X] + visitCount[i];

  if (currentSum > maxSum) {
    maxSum = currentSum;
    maxCount = 1;
  } else if (currentSum === maxSum) {
    maxCount++;
  }
}

if (maxSum === 0) {
  console.log('SAD');
} else {
  console.log(maxSum);
  console.log(maxCount);
}
