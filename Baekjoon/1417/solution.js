const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());

if (N === 1) {
  console.log(0);
} else {
  let dasomVotes = Number(input.shift());
  const otherVotes = input.map(Number);

  let buyCount = 0;

  while (true) {
    otherVotes.sort((a, b) => b - a);

    if (dasomVotes > otherVotes[0]) {
      break;
    }

    dasomVotes++;
    otherVotes[0]--;
    buyCount++;
  }

  console.log(buyCount);
}
