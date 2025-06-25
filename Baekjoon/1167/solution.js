const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const V = Number(input[0]);
const graph = Array.from({ length: V + 1 }, () => []);

for (let i = 1; i <= V; i++) {
  const data = input[i].split(' ').map(Number);
  const from = data[0];
  let idx = 1;

  while (data[idx] !== -1) {
    const to = data[idx];
    const weight = data[idx + 1];

    graph[from].push([to, weight]);

    idx += 2;
  }
}

function dfs(start) {
  const visited = Array(V + 1).fill(false);
  const distance = Array(V + 1).fill(0);
  const stack = [[start, 0]];
  visited[start] = true;

  let maxDistance = 0;
  let farthestNode = start;

  while (stack.length > 0) {
    const [current, dist] = stack.pop();

    if (dist > maxDistance) {
      maxDistance = dist;
      farthestNode = current;
    }

    for (const [next, weight] of graph[current]) {
      if (!visited[next]) {
        visited[next] = true;
        distance[next] = dist + weight;
        stack.push([next, dist + weight]);
      }
    }
  }

  return { farthestNode, maxDistance };
}

const first = dfs(1);

const second = dfs(first.farthestNode);

console.log(second.maxDistance);
