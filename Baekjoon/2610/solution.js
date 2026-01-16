const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const M = Number(input.shift());

const dist = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));
for (let i = 1; i <= N; i++) {
  dist[i][i] = 0;
}

for (let i = 0; i < M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  dist[u][v] = 1;
  dist[v][u] = 1;
}

for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (dist[i][j] > dist[i][k] + dist[k][j]) {
        dist[i][j] = dist[i][k] + dist[k][j];
      }
    }
  }
}

const visited = new Array(N + 1).fill(false);
const leaders = [];

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    const committee = [];
    for (let j = 1; j <= N; j++) {
      if (dist[i][j] !== Infinity) {
        committee.push(j);
        visited[j] = true;
      }
    }

    let minMaxDist = Infinity;
    let leader = 0;

    for (const member of committee) {
      let maxDist = 0;
      for (const target of committee) {
        maxDist = Math.max(maxDist, dist[member][target]);
      }

      if (maxDist < minMaxDist) {
        minMaxDist = maxDist;
        leader = member;
      }
    }
    leaders.push(leader);
  }
}

console.log(leaders.length);
console.log(leaders.sort((a, b) => a - b).join('\n'));
