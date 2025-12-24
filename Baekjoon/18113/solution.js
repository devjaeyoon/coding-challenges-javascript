const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, K, M] = input.shift().split(' ').map(Number);
const validLengths = [];

for (let i = 0; i < N; i++) {
  const L = Number(input[i]);

  if (L > 2 * K) {
    validLengths.push(L - 2 * K);
  } else if (L > K && L < 2 * K) {
    validLengths.push(L - K);
  }
}

if (validLengths.length === 0) {
  console.log(-1);
  process.exit();
} else {
  let left = 1;
  let right = 1000000000;
  let answer = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid === 0) {
      left = 1;
      continue;
    }

    let count = 0;
    for (let i = 0; i < validLengths.length; i++) {
      count += Math.floor(validLengths[i] / mid);
    }

    if (count >= M) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(answer);
}
