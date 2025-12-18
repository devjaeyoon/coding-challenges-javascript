const K = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString()
);

const dp = new Array(K + 1).fill(false);

for (let i = K; i >= 1; i--) {
  let canWin = false;

  for (let d = 1; d * d <= i; d++) {
    if (i % d === 0) {
      if (i + d <= K && !dp[i + d]) {
        canWin = true;
        break;
      }

      let target2 = i / d;
      if (i + target2 <= K && !dp[i + target2]) {
        canWin = true;
        break;
      }
    }
  }

  dp[i] = canWin;
}

console.log(dp[1] ? 'Kali' : 'Ringo');
