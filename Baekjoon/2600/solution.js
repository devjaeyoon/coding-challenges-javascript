const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const moves = input.shift().split(' ').map(Number);
const dp = Array.from(Array(501), () => Array(501).fill(-1));

function determineWinner(k1, k2) {
  if (dp[k1][k2] !== -1) {
    return dp[k1][k2];
  }

  for (const move of moves) {
    if (k1 >= move && determineWinner(k1 - move, k2) === 0) {
      dp[k1][k2] = 1;
      return 1;
    }
    if (k2 >= move && determineWinner(k1, k2 - move) === 0) {
      dp[k1][k2] = 1;
      return 1;
    }
  }

  dp[k1][k2] = 0;

  return 0;
}

const results = [];
for (let i = 0; i < 5; i++) {
  const [k1, k2] = input[i].split(' ').map(Number);

  if (determineWinner(k1, k2) === 1) {
    results.push('A');
  } else {
    results.push('B');
  }
}

console.log(results.join('\n'));
