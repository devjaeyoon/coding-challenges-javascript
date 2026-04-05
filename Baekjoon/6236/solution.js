const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(/\s+/).map(Number);
const expenses = [];

let left = 0;
let right = 0;

for (let i = 0; i < N; i++) {
  const cost = Number(input[i]);
  expenses.push(cost);

  if (cost > left) {
    left = cost;
  }

  right += cost;
}

let answer = right;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let drawCount = 1;
  let currentMoney = mid;

  for (let i = 0; i < N; i++) {
    if (currentMoney < expenses[i]) {
      drawCount++;
      currentMoney = mid;
    }
    currentMoney -= expenses[i];
  }

  if (drawCount > M) {
    left = mid + 1;
  } else {
    answer = mid;
    right = mid - 1;
  }
}

console.log(answer);
