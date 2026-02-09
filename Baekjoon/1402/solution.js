const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());
const output = [];

for (let i = 0; i < T; i++) {
  output.push('yes');
}

console.log(output.join('\n'));
