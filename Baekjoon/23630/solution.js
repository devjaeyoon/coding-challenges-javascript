const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const N = Number(input.shift());

let maxLen = 0;

for (let bit = 0; bit < 20; bit++) {
  let count = 0;
  let mask = 1 << bit;

  for (let i = 0; i < N; i++) {
    if ((input[i] & mask) !== 0) {
      count++;
    }
  }

  if (count > maxLen) {
    maxLen = count;
  }
}

console.log(maxLen);
