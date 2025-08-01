const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

let maxWeight = 0;

for (let i = 0; i < M; i++) {
  const [a, b, c] = input[i].split(' ').map(Number);

  graph[a].push([b, c]);
  graph[b].push([a, c]);

  maxWeight = Math.max(maxWeight, c);
}

const [start, end] = input[M].split(' ').map(Number);

function canMove(mid) {
  const visited = Array(N + 1).fill(false);
  const queue = [start];
  visited[start] = true;

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === end) {
      return true;
    }

    for (const [next, weight] of graph[current]) {
      if (!visited[next] && weight >= mid) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }

  return false;
}

let left = 1;
let right = maxWeight;
let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (canMove(mid)) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);
