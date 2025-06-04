const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const graph = input.map((line) => line.split(' ').map(Number));

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][k] && graph[k][j]) {
        graph[i][j] = 1;
      }
    }
  }
}

console.log(graph.map((row) => row.join(' ')).join('\n'));
