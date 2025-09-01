const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
let [r, c, d] = input.shift().split(' ').map(Number);
const room = input.map((line) => line.split(' ').map(Number));

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
let cleanedCount = 0;

while (true) {
  if (room[r][c] === 0) {
    room[r][c] = 2;
    cleanedCount++;
  }

  let foundToClean = false;

  for (let i = 0; i < 4; i++) {
    d = (d + 3) % 4;

    const nr = r + dr[d];
    const nc = c + dc[d];

    if (nr >= 0 && nr < N && nc >= 0 && nc < M && room[nr][nc] === 0) {
      r = nr;
      c = nc;
      foundToClean = true;
      break;
    }
  }

  if (foundToClean) {
    continue;
  }

  const reverseR = r - dr[d];
  const reverseC = c - dc[d];

  if (
    reverseR >= 0 &&
    reverseR < N &&
    reverseC >= 0 &&
    reverseC < M &&
    room[reverseR][reverseC] !== 1
  ) {
    r = reverseR;
    c = reverseC;
  } else {
    break;
  }
}

console.log(cleanedCount);
