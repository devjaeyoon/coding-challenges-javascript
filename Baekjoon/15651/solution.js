const [N, M] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const sequence = [];
const output = [];

function generateSequence(selectedCount) {
  if (selectedCount === M) {
    output.push(sequence.join(' '));
    return;
  }

  for (let i = 1; i <= N; i++) {
    sequence.push(i);
    generateSequence(selectedCount + 1);
    sequence.pop();
  }
}

generateSequence(0);
console.log(output.join('\n'));
