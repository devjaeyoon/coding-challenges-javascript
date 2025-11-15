const S = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim();

const distinctSubstrings = new Set();

for (let i = 0; i < S.length; i++) {
  for (let j = i; j < S.length; j++) {
    const sub = S.substring(i, j + 1);

    distinctSubstrings.add(sub);
  }
}

console.log(distinctSubstrings.size);
