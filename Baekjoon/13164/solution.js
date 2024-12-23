const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\n');

function solution(input) {
  const [N, K] = input[0].split(' ').map(Number);
  const students = input[1].split(' ').map(Number);
  const differences = [];

  for (let i = 0; i < N - 1; i++) {
    differences.push(students[i + 1] - students[i]);
  }

  differences.sort((a, b) => a - b);

  let cost = 0;

  for (let i = 0; i < differences.length - (K - 1); i++) {
    cost += differences[i];
  }

  return console.log(cost);
}

solution(input);
