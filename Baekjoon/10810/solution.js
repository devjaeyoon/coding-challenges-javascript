const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const baskets = Array.from({ length: N }, () => 0);

for (let i = 0; i < M; i++) {
  const [start, end, number] = input[i].split(' ').map(Number);

  for (let j = start - 1; j < end; j++) {
    baskets[j] = number;
  }
}

console.log(baskets.join(' '));
