const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const friends = input.map((line) => line.split(''));
let maxFriends = 0;

for (let i = 0; i < N; i++) {
  const twoFriends = new Set();

  for (let j = 0; j < N; j++) {
    if (i === j) {
      continue;
    }

    if (friends[i][j] === 'Y') {
      twoFriends.add(j);
    }
    if (friends[i][j] === 'N') {
      for (let k = 0; k < N; k++) {
        if (friends[i][k] === 'Y' && friends[k][j] === 'Y') {
          twoFriends.add(j);
          break;
        }
      }
    }
  }

  maxFriends = Math.max(maxFriends, twoFriends.size);
}

console.log(maxFriends);
