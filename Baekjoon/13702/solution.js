const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const kettleCapacities = input.map(Number);

let min = 1;
let max = Math.max(...kettleCapacities);
let answer = 0;

while (min <= max) {
  const mid = Math.floor((min + max) / 2);

  let count = 0;
  for (const capacity of kettleCapacities) {
    count += Math.floor(capacity / mid);
  }

  if (count >= K) {
    answer = mid;
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(answer);
