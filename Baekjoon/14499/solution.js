const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M, x, y, K] = input.shift().split(' ').map(Number);
const map = input.splice(0, N).map((line) => line.split(' ').map(Number));
const commands = input.shift().split(' ').map(Number);

const dice = [0, 0, 0, 0, 0, 0, 0];
const dx = [0, 0, 0, -1, 1];
const dy = [0, 1, -1, 0, 0];

let currentX = x;
let currentY = y;

function rollDice(dir) {
  const [, d1, d2, d3, d4, d5, d6] = dice;

  switch (dir) {
    case 1:
      dice[1] = d4;
      dice[3] = d1;
      dice[4] = d6;
      dice[6] = d3;
      break;
    case 2:
      dice[1] = d3;
      dice[3] = d6;
      dice[4] = d1;
      dice[6] = d4;
      break;
    case 3:
      dice[1] = d5;
      dice[2] = d1;
      dice[5] = d6;
      dice[6] = d2;
      break;
    case 4:
      dice[1] = d2;
      dice[2] = d6;
      dice[5] = d1;
      dice[6] = d5;
      break;
  }
}

const result = [];

for (const command of commands) {
  const nextX = currentX + dx[command];
  const nextY = currentY + dy[command];

  if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= M) {
    continue;
  }

  currentX = nextX;
  currentY = nextY;

  rollDice(command);

  if (map[currentX][currentY] === 0) {
    map[currentX][currentY] = dice[6];
  } else {
    dice[6] = map[currentX][currentY];
    map[currentX][currentY] = 0;
  }

  result.push(dice[1]);
}

console.log(result.join('\n'));
