const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(/\s+/);

let idx = 0;
const N = Number(input[idx++]);
const subjects = new Array(N);

for (let i = 0; i < N; i++) {
  const k = Number(input[idx++]);
  let subjectMask = 0n;

  for (let j = 0; j < k; j++) {
    const time = BigInt(input[idx++]);
    subjectMask |= 1n << time;
  }

  subjects[i] = subjectMask;
}

const M = Number(input[idx++]);
const results = [];

for (let i = 0; i < M; i++) {
  const p = Number(input[idx++]);
  let studentMask = 0n;

  for (let j = 0; j < p; j++) {
    const time = BigInt(input[idx++]);
    studentMask |= 1n << time;
  }

  let count = 0;
  for (let j = 0; j < N; j++) {
    if ((subjects[j] & studentMask) === subjects[j]) {
      count++;
    }
  }

  results.push(count);
}

console.log(results.join('\n'));
