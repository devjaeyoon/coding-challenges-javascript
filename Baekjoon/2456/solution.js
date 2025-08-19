const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const votes = input.map((line) => line.split(' ').map(Number));

const candidates = [
  { number: 1, totalScore: 0, count3: 0, count2: 0 },
  { number: 2, totalScore: 0, count3: 0, count2: 0 },
  { number: 3, totalScore: 0, count3: 0, count2: 0 },
];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < 3; j++) {
    const score = votes[i][j];

    candidates[j].totalScore += score;

    if (score === 3) {
      candidates[j].count3 += 1;
    } else if (score === 2) {
      candidates[j].count2 += 1;
    }
  }
}

candidates.sort((a, b) => {
  if (a.totalScore !== b.totalScore) {
    return b.totalScore - a.totalScore;
  }

  if (a.count3 !== b.count3) {
    return b.count3 - a.count3;
  }

  return b.count2 - a.count2;
});

const winner = candidates[0];
const runnerUp = candidates[1];

if (
  winner.totalScore === runnerUp.totalScore &&
  winner.count3 === runnerUp.count3 &&
  winner.count2 === runnerUp.count2
) {
  console.log(0, winner.totalScore);
} else {
  console.log(winner.number, winner.totalScore);
}
