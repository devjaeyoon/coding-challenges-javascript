const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const jewels = [];

let left = 1;
let right = 0;

for (let i = 1; i <= M; i++) {
  const count = Number(input[i]);
  jewels.push(count);

  if (count > right) {
    right = count;
  }
}

let answer = right;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  let requiredChildren = 0;

  for (let i = 0; i < M; i++) {
    requiredChildren += Math.ceil(jewels[i] / mid);
  }

  if (requiredChildren <= N) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
