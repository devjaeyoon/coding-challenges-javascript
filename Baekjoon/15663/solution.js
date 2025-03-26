const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const sequence = [];
const visited = new Array(N).fill(false);

function generateSequence(selectedCount) {
  if (selectedCount === M) {
    console.log(sequence.join(' '));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) {
      continue;
    }

    if (i > 0 && numbers[i] === numbers[i - 1] && !visited[i - 1]) {
      continue;
    }

    sequence.push(numbers[i]);
    visited[i] = true;
    generateSequence(selectedCount + 1);
    sequence.pop();
    visited[i] = false;
  }
}

generateSequence(0);
