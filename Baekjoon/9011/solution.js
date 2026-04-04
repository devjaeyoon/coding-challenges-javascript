const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());

const result = [];
let lineIdx = 0;

for (let i = 0; i < T; i++) {
  const n = Number(input[lineIdx++]);
  const R = input[lineIdx++].split(' ').map(Number);

  const available = Array.from({ length: n }, (_, idx) => idx + 1);
  const S = new Array(n);
  let isPossible = true;

  for (let j = n - 1; j >= 0; j--) {
    const smallerCount = R[j];

    if (smallerCount >= available.length) {
      isPossible = false;
      break;
    }

    S[j] = available[smallerCount];

    available.splice(smallerCount, 1);
  }

  if (isPossible) {
    result.push(S.join(' '));
  } else {
    result.push('IMPOSSIBLE');
  }
}

console.log(result.join('\n'));
