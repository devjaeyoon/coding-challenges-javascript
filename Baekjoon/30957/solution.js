const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const counts = { B: 0, S: 0, A: 0 };

for (let i = 0; i < N; i++) {
  counts[input[0][i]] += 1;
}

const maxCount = Math.max(...Object.values(counts));
const popularMajors = Object.keys(counts).filter(
  (count) => counts[count] === maxCount
);

console.log(popularMajors.length === 3 ? 'SCU' : popularMajors.join(''));
