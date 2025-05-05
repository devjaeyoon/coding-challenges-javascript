const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const people = input.map((line) => line.split(' ').map(Number));
const ranks = new Array(N).fill(1);

for (let i = 0; i < N; i++) {
  for (let j = i; j < N; j++) {
    if (people[j][0] > people[i][0] && people[j][1] > people[i][1]) {
      ranks[i] += 1;
    }
    if (people[j][0] < people[i][0] && people[j][1] < people[i][1]) {
      ranks[j] += 1;
    }
  }
}

console.log(ranks.join(' '));
