const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const graph = Array.from({ length: N }, () => []);

for (let i = 0; i < M; i++) {
  const [a, b] = input[i].split(' ').map(Number);

  graph[a].push(b);
  graph[b].push(a);
}

const visited = new Array(N).fill(false);
let found = false;

function dfs(node, depth) {
  if (depth === 5) {
    found = true;
    return;
  }

  visited[node] = true;

  for (const friend of graph[node]) {
    if (!visited[friend]) {
      dfs(friend, depth + 1);
      if (found) return;
    }
  }

  visited[node] = false;
}

for (let i = 0; i < N; i++) {
  dfs(i, 1);

  if (found) {
    console.log(1);
    process.exit(0);
  }
}

console.log(0);
