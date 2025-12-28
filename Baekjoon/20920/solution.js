const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const wordMap = new Map();

for (let i = 0; i < N; i++) {
  const word = input[i];

  if (word.length >= M) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
  }
}

const sortedWords = [...wordMap.keys()].sort((a, b) => {
  const countA = wordMap.get(a);
  const countB = wordMap.get(b);

  if (countA !== countB) {
    return countB - countA;
  }

  if (a.length !== b.length) {
    return b.length - a.length;
  }

  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
});

console.log(sortedWords.join('\n'));
