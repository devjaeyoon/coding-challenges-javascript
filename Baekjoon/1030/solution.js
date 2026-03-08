const [s, N, K, R1, R2, C1, C2] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const start = Math.floor((N - K) / 2);
const end = start + K - 1;

function getColor(time, r, c) {
  if (time === 0) {
    return 0;
  }

  const blockSize = Math.pow(N, time - 1);

  const blockR = Math.floor(r / blockSize);
  const blockC = Math.floor(c / blockSize);

  if (start <= blockR && blockR <= end && start <= blockC && blockC <= end) {
    return 1;
  }

  return getColor(time - 1, r % blockSize, c % blockSize);
}

let result = '';

for (let i = R1; i <= R2; i++) {
  let rowStr = '';

  for (let j = C1; j <= C2; j++) {
    rowStr += getColor(s, i, j);
  }

  result += rowStr + '\n';
}

console.log(result.trim());
