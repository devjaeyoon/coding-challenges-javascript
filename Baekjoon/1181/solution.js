const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const words = [...new Set(input.slice(1))];

words.sort(
  (word1, word2) => word1.length - word2.length || word1.localeCompare(word2)
);

console.log(words.join('\n'));
