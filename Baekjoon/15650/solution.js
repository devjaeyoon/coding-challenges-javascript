const [N, M] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const sequence = [];
const visited = new Array(N + 1).fill(false);

function generateSequence(selectedCount, startIndex) {
  if (selectedCount === M) {
    console.log(sequence.join(' '));
    return;
  }

  for (let i = startIndex; i <= N; i++) {
    if (visited[i]) {
      continue;
    }

    sequence.push(i);
    visited[i] = true;
    generateSequence(selectedCount + 1, i + 1);
    sequence.pop();
    visited[i] = false;
  }
}

generateSequence(0, 1);
