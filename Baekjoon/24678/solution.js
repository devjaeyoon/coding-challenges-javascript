const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());
const results = [];

for (let i = 0; i < T; i++) {
  const [x, y, z] = input[i].trim().split(' ').map(Number);

  let oddCount = 0;
  if (x % 2 !== 0) oddCount++;
  if (y % 2 !== 0) oddCount++;
  if (z % 2 !== 0) oddCount++;

  if (oddCount === 0 || oddCount === 1) {
    results.push('R');
  } else {
    results.push('B');
  }
}

console.log(results.join('\n'));
