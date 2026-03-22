const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [S, C] = input[0].split(' ').map(Number);
const onions = [];

let sum = 0n;
let maxOnion = 0;

for (let i = 1; i <= S; i++) {
  const val = BigInt(input[i]);

  onions.push(val);
  sum += val;

  if (val > maxOnion) {
    maxOnion = val;
  }
}

let left = 1n;
let right = maxOnion;
let maxLength = 0n;

while (left <= right) {
  let mid = (left + right) / 2n;
  let count = 0n;

  for (let i = 0; i < S; i++) {
    count += onions[i] / mid;
  }

  if (count >= BigInt(C)) {
    maxLength = mid;
    left = mid + 1n;
  } else {
    right = mid - 1n;
  }
}

const result = sum - maxLength * BigInt(C);

console.log(result.toString());
