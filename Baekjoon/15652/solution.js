const [N, M] = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const sequence = [];

function generateSequence(selectedCount, startNumber) {
  if (selectedCount === M) {
    console.log(sequence.join(' '));
    return;
  }

  for (let i = startNumber; i <= N; i++) {
    sequence.push(i);
    generateSequence(selectedCount + 1, i);
    sequence.pop();
  }
}

generateSequence(0, 1);
