const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M, L] = input.shift().split(' ').map(Number);
const locations = N > 0 ? input[0].split(' ').map(Number) : [];

locations.push(0);
locations.push(L);
locations.sort((a, b) => a - b);

let left = 1;
let right = L - 1;
let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let count = 0;

  for (let i = 1; i < locations.length; i++) {
    const dist = locations[i] - locations[i - 1];
    count += Math.floor((dist - 1) / mid);
  }

  if (count > M) {
    left = mid + 1;
  } else {
    answer = mid;
    right = mid - 1;
  }
}

console.log(answer);
