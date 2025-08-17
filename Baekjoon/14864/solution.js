const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const givenPairs = input.map((line) => line.split(' ').map(Number));
const countLargerFromFront = new Array(N + 1).fill(0);
const countSmallerBehind = new Array(N + 1).fill(0);

for (const [X, Y] of givenPairs) {
  countSmallerBehind[X] += 1;
  countLargerFromFront[Y] += 1;
}

const cardRanks = new Array(N + 1);
for (let i = 1; i <= N; i++) {
  cardRanks[i] = i - 1 - countLargerFromFront[i] + countSmallerBehind[i];
}

const isRankAssigned = new Array(N).fill(false);
for (let i = 1; i <= N; i++) {
  const rank = cardRanks[i];

  if (rank < 0 || rank >= N || isRankAssigned[rank]) {
    console.log(-1);

    return;
  }

  isRankAssigned[rank] = true;
}

const finalCardNumbers = [];
for (let i = 1; i <= N; i++) {
  finalCardNumbers.push(cardRanks[i] + 1);
}
console.log(finalCardNumbers.join(' '));
