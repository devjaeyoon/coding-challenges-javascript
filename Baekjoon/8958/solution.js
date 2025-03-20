const input = require('fs')
  .readFileSync('./example.txt')
  .toString()
  .trim()
  .split('\n');

const testCaseCnt = Number(input[0]);
const testCases = input.slice(1);

for (let i = 0; i < testCaseCnt; i++) {
  let streak = 0;
  let score = 0;

  for (let j = 0; j < testCases[i].length; j++) {
    if (testCases[i][j] === 'X') {
      streak = 0;
      continue;
    }
    streak += 1;
    score += streak;
  }

  console.log(score);
}
