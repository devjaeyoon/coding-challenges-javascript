const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const TC = Number(input.shift());
const INF = 1e9;
const results = [];
let line = 0;

for (let t = 0; t < TC; t++) {
  const [N, M, W] = input[line++].split(' ').map(Number);
  const edges = [];

  for (let i = 0; i < M; i++) {
    const [S, E, T] = input[line++].split(' ').map(Number);
    edges.push([S, E, T]);
    edges.push([E, S, T]);
  }

  for (let i = 0; i < W; i++) {
    const [S, E, T] = input[line++].split(' ').map(Number);
    edges.push([S, E, -T]);
  }

  for (let i = 1; i <= N; i++) {
    edges.push([0, i, 0]);
  }

  const dist = Array(N + 1).fill(INF);
  dist[0] = 0;
  let hasNegativeCycle = false;

  for (let i = 0; i <= N; i++) {
    let updated = false;

    for (const [from, to, cost] of edges) {
      if (dist[to] > dist[from] + cost) {
        dist[to] = dist[from] + cost;
        updated = true;

        if (i === N) {
          hasNegativeCycle = true;
          break;
        }
      }
    }

    if (hasNegativeCycle) {
      break;
    }
    if (!updated) {
      break;
    }
  }

  results.push(hasNegativeCycle ? 'YES' : 'NO');
}

console.log(results.join('\n'));
