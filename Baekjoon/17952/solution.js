const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);

const stack = [];
let totalScore = 0;

for (let i = 1; i <= N; i++) {
  const line = input[i].trim().split(' ');

  if (line[0] === '1') {
    const A = Number(line[1]);
    const T = Number(line[2]);

    stack.push({ score: A, time: T });
  }

  if (stack.length > 0) {
    const currentTask = stack[stack.length - 1];
    currentTask.time -= 1;

    if (currentTask.time === 0) {
      totalScore += currentTask.score;
      stack.pop();
    }
  }
}

console.log(totalScore);
