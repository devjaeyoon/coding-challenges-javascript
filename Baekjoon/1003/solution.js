const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const T = input[0];

for (let i = 1; i <= T; i++) {
  const N = input[i];

  const callCounts = [
    [1, 0],
    [0, 1],
  ];

  for (let j = 2; j <= N; j++) {
    callCounts[j] = [
      callCounts[j - 1][0] + callCounts[j - 2][0],
      callCounts[j - 1][1] + callCounts[j - 2][1],
    ];
  }

  console.log(callCounts[N].join(' '));
}
