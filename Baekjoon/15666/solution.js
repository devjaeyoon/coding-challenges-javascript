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

function generateSequence(selectedCount, startIndex) {
  if (selectedCount === M) {
    console.log(`${sequence.join(' ')}`);
    return;
  }

  for (let i = startIndex; i < N; i++) {
    if (i > 0 && numbers[i] === numbers[i - 1]) {
      continue;
    }

    sequence.push(numbers[i]);
    generateSequence(selectedCount + 1, i);
    sequence.pop();
  }
}

generateSequence(0, 0);
