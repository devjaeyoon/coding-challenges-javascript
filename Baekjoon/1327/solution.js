const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);
const initialArray = input[1].split(' ').map(Number);

const targetString = Array.from({ length: N }, (_, i) => i + 1).join('');

const queue = [[initialArray, 0]];
const visited = new Set();
const initialStateString = initialArray.join('');
visited.add(initialStateString);

let head = 0;
let answer = -1;

while (head < queue.length) {
  const [currentArray, count] = queue[head++];

  const currentString = currentArray.join('');
  if (currentString === targetString) {
    answer = count;
    break;
  }

  for (let i = 0; i <= N - K; i++) {
    const nextArray = [...currentArray];

    const segmentToReverse = nextArray.slice(i, i + K);
    segmentToReverse.reverse();

    nextArray.splice(i, K, ...segmentToReverse);

    const nextString = nextArray.join('');
    if (!visited.has(nextString)) {
      visited.add(nextString);
      queue.push([nextArray, count + 1]);
    }
  }
}

console.log(answer);
