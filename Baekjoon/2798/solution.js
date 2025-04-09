const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const cards = input[0].split(' ').map((card) => Number(card));
const results = [];

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      results.push(cards[i] + cards[j] + cards[k]);
    }
  }
}

results.sort((a, b) => a - b);

let max = 0;

for (const result of results) {
  if (result > M) break;

  if (result > max && result <= M) {
    max = result;
  }
}

console.log(max);
