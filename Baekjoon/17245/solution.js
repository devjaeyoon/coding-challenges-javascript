const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const computers = [];
let totalComputers = 0;
let maxVal = 0;

for (let i = 0; i < N; i++) {
  const row = input[i].trim().split(/\s+/).map(Number);
  for (const count of row) {
    computers.push(count);
    totalComputers += count;

    if (count > maxVal) {
      maxVal = count;
    }
  }
}

let left = 0;
let right = maxVal;
let answer = 0;

const target = Math.ceil(totalComputers / 2);

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let currentWorking = 0;

  for (let i = 0; i < computers.length; i++) {
    if (computers[i] > mid) {
      currentWorking += mid;
    } else {
      currentWorking += computers[i];
    }
  }

  if (currentWorking >= target) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
