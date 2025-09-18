const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(/\r?\n/);

const [N, M] = input.shift().split(' ').map(Number);
const memoKeywords = new Set(input.splice(0, N));

const results = [];

for (const post of input) {
  const keywordsInPost = post.split(',');

  for (const keyword of keywordsInPost) {
    memoKeywords.delete(keyword);
  }

  results.push(memoKeywords.size);
}

console.log(results.join('\n'));
