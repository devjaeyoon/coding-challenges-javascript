const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const T = Number(input[0]);
const result = [];

let lineIdx = 1;
for (let t = 0; t < T; t++) {
  if (!input[lineIdx]) {
    break;
  }

  const [m, n] = input[lineIdx++].split(' ').map(Number);

  result.push(1);

  for (let j = 0; j < n; j++) {
    result.push(`(${0},${j})`);
  }

  for (let i = 1; i < m; i++) {
    if (i % 2 !== 0) {
      for (let j = n - 1; j >= 1; j--) {
        result.push(`(${i},${j})`);
      }
    } else {
      for (let j = 1; j < n; j++) {
        result.push(`(${i},${j})`);
      }
    }
  }

  for (let i = m - 1; i >= 1; i--) {
    result.push(`(${i},0)`);
  }
}

console.log(result.join('\n'));
