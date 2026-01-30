const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const tastes = input[1].split(' ').map(Number);
const k = Number(input[2]);

const step = Math.floor(N / k);
const result = [];

for (let i = 0; i < N; i += step) {
  const chunk = tastes.slice(i, i + step);

  chunk.sort((a, b) => a - b);

  result.push(chunk.join(' '));
}

console.log(result.join(' '));
