const input = require('fs')
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());

function generateKey(word) {
  if (word.length <= 2) {
    return word;
  }
  const first = word[0];
  const last = word[word.length - 1];
  const middle = word.slice(1, -1).split('').sort().join('');

  return first + middle + last;
}

const dictionaryMap = new Map();

for (let i = 0; i < N; i++) {
  const word = input[i];
  const key = generateKey(word);

  dictionaryMap.set(key, (dictionaryMap.get(key) || 0) + 1);
}

const M = Number(input[N]);

const results = [];

for (let i = N + 1; i < N + 1 + M; i++) {
  const sentence = input[i];
  const words = sentence.split(' ').filter((word) => word);

  let totalWays = 1;

  for (const word of words) {
    const key = generateKey(word);
    const waysForWord = dictionaryMap.get(key) || 0;

    totalWays *= waysForWord;

    if (totalWays === 0) {
      break;
    }
  }

  results.push(totalWays);
}

console.log(results.join('\n'));
