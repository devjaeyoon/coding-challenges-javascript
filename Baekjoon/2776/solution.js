const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const N = Number(input.shift());
  const note1 = new Set(input.shift().split(' ').map(Number));
  const M = Number(input.shift());
  const note2 = input.shift().split(' ').map(Number);

  const result = [];

  for (const num of note2) {
    if (note1.has(num)) {
      result.push(1);
    } else {
      result.push(0);
    }
  }

  console.log(result.join('\n'));
}
