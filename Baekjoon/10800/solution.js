const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const balls = [];

for (let i = 1; i <= N; i++) {
  const [color, size] = input[i].split(' ').map(Number);

  balls.push({ color, size, originalIndex: i - 1 });
}

balls.sort((a, b) => a.size - b.size);

const answer = new Array(N).fill(0);
const colorSum = new Array(N + 1).fill(0);
let totalSum = 0;

let smallerBallIndex = 0;
for (let i = 0; i < N; i++) {
  const { color, size, originalIndex } = balls[i];

  while (balls[smallerBallIndex].size < size) {
    totalSum += balls[smallerBallIndex].size;
    colorSum[balls[smallerBallIndex].color] += balls[smallerBallIndex].size;
    smallerBallIndex++;
  }

  answer[originalIndex] = totalSum - colorSum[color];
}

console.log(answer.join('\n'));
