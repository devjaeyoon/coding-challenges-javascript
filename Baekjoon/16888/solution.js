const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const T = Number(input[0]);

const queries = [];
let maxN = 0;

for (let i = 0; i < T; i++) {
  const n = Number(input[i + 1]);

  queries.push(n);

  if (n > maxN) {
    maxN = n;
  }
}

const dp = new Array(maxN + 1).fill(0);

for (let i = 1; i <= maxN; i++) {
  for (let j = 1; j * j <= i; j++) {
    if (dp[i - j * j] === 0) {
      dp[i] = 1;
      break;
    }
  }
}

const result = [];
for (let i = 0; i < T; i++) {
  result.push(dp[queries[i]] === 1 ? 'koosaga' : 'cubelover');
}

console.log(result.join('\n'));
