const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString(),
);

const dp = new Int32Array(N + 1);

for (let i = 10; i <= N; i++) {
  const s = i.toString();
  const len = s.length;

  let minWinMove = Infinity;
  let canWin = false;

  for (let start = 0; start < len; start++) {
    for (let end = start + 1; end <= len; end++) {
      if (start === 0 && end === len) continue;

      const m = Number(s.substring(start, end));
      if (m === 0) continue;

      if (dp[i - m] === 0) {
        canWin = true;
        if (m < minWinMove) {
          minWinMove = m;
        }
      }
    }
  }

  if (canWin) {
    dp[i] = minWinMove;
  }
}

console.log(dp[N] !== 0 ? dp[N] : -1);
