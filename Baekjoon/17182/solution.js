const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const graph = input.map((line) => line.split(' ').map(Number));

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][k] + graph[k][j] < graph[i][j]) {
        graph[i][j] = graph[i][k] + graph[k][j];
      }
    }
  }
}

const visited = new Array(N).fill(false);
let minTime = Infinity;

function dfs(current, count, time) {
  if (time >= minTime) {
    return;
  }

  if (count === N) {
    minTime = Math.min(minTime, time);
    return;
  }

  for (let next = 0; next < N; next++) {
    if (!visited[next]) {
      visited[next] = true;
      dfs(next, count + 1, time + graph[current][next]);
      visited[next] = false;
    }
  }
}

visited[K] = true;
dfs(K, 1, 0);

console.log(minTime);
