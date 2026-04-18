const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);

const count = new Array(1000002).fill(0);

for (let i = 1; i <= N; i++) {
  const [L, R] = input[i].split(' ').map(Number);
  count[L]++;
  count[R]--;
}

for (let i = 1; i <= 1000000; i++) {
  count[i] += count[i - 1];
}

let left = 0;
let right = 0;
let sum = 0;
let found = false;

while (true) {
  if (sum === K) {
    console.log(`${left} ${right}`);
    found = true;
    break;
  } else if (sum > K) {
    sum -= count[left];
    left++;
  } else if (right <= 1000000) {
    sum += count[right];
    right++;
  } else {
    break;
  }
}

if (!found) {
  console.log('0 0');
}
