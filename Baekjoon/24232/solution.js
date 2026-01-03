const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const adj = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i < N; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  const edgeIndex = i - 1;

  adj[u].push([v, edgeIndex, 0]);
  adj[v].push([u, edgeIndex, 1]);
}

const visited = new Int8Array(N + 1);
const queue = [1];
let root1Cost = 0;
visited[1] = 1;

let head = 0;
while (head < queue.length) {
  const curr = queue[head++];

  for (const [next, idx, dir] of adj[curr]) {
    if (visited[next]) {
      continue;
    }
    visited[next] = 1;

    if (dir === 1) {
      root1Cost++;
    }
    queue.push(next);
  }
}

const costs = new Int32Array(N + 1);
costs[1] = root1Cost;

let minCost = root1Cost;
let bestRoot = 1;

visited.fill(0);
visited[1] = 1;

const q2 = [1];
head = 0;

while (head < q2.length) {
  const curr = q2[head++];

  for (const [next, idx, dir] of adj[curr]) {
    if (visited[next]) {
      continue;
    }
    visited[next] = 1;

    const nextCost = costs[curr] + (dir === 0 ? 1 : -1);
    costs[next] = nextCost;

    if (nextCost < minCost) {
      minCost = nextCost;
      bestRoot = next;
    }

    q2.push(next);
  }
}

const result = new Int8Array(N - 1);
visited.fill(0);
visited[bestRoot] = 1;

const q3 = [bestRoot];
head = 0;

while (head < q3.length) {
  const curr = q3[head++];

  for (const [next, idx, dir] of adj[curr]) {
    if (visited[next]) {
      continue;
    }
    visited[next] = 1;

    result[idx] = dir;

    q3.push(next);
  }
}

console.log(result.join(''));
