const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const graph = [];

for (let i = 1; i <= N; i++) {
  graph.push(input[i].split(' ').map(Number));
}

const prefix = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    prefix[i][j] =
      prefix[i - 1][j] +
      prefix[i][j - 1] -
      prefix[i - 1][j - 1] +
      graph[i - 1][j - 1];
  }
}

const K = Number(input[N + 1]);

for (let k = N + 2; k < N + 2 + K; k++) {
  const [i, j, x, y] = input[k].split(' ').map(Number);

  const result =
    prefix[x][y] - prefix[i - 1][y] - prefix[x][j - 1] + prefix[i - 1][j - 1];

  console.log(result);
}
