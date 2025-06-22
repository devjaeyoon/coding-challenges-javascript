const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const ranks = input[0].split(' ').map(Number);
const grades = [];

function getGrade(p) {
  if (p >= 0 && p <= 4) return 1;
  else if (p <= 11) return 2;
  else if (p <= 23) return 3;
  else if (p <= 40) return 4;
  else if (p <= 60) return 5;
  else if (p <= 77) return 6;
  else if (p <= 89) return 7;
  else if (p <= 96) return 8;
  else return 9;
}

for (let i = 0; i < K; i++) {
  const percentage = parseInt((ranks[i] * 100) / N);

  grades.push(getGrade(percentage));
}

console.log(grades.join(' '));
