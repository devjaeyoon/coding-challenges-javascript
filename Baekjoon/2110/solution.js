const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, C] = input.shift().split(' ').map(Number);
const houses = input.map(Number).sort((a, b) => a - b);

let low = 1;
let high = houses[houses.length - 1] - houses[0];
let answer = 0;

while (low <= high) {
  const mid = Math.floor((low + high) / 2);

  let count = 1;
  let lastInstalled = houses[0];

  for (let i = 1; i < N; i++) {
    if (houses[i] - lastInstalled >= mid) {
      count++;
      lastInstalled = houses[i];
    }
  }

  if (count >= C) {
    answer = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(answer);
