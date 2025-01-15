const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N] = input[0].split(' ').map(Number);
const graph = [];
const queue = [];
let unripeTomatoes = 0;

for (let i = 1; i <= N; i++) {
  const row = input[i].split(' ').map(Number);

  for (let j = 0; j < M; j++) {
    if (row[j] === 1) {
      queue.push([i - 1, j, 0]);
    }
    if (row[j] === 0) {
      unripeTomatoes += 1;
    }
  }

  graph.push(row);
}

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let totalDays = 0;
let queueIndex = 0;

while (queueIndex < queue.length) {
  const [y, x, days] = queue[queueIndex++];
  console.log(y, x, days);
  console.log(graph);
  console.log(queue);
  console.log(queueIndex);
  totalDays = Math.max(totalDays, days);

  for (const [dy, dx] of directions) {
    const ny = y + dy;
    const nx = x + dx;

    if (ny >= 0 && ny < N && nx >= 0 && nx < M && graph[ny][nx] === 0) {
      graph[ny][nx] = 1;
      queue.push([ny, nx, days + 1]);
      unripeTomatoes -= 1;
    }
  }
}

console.log(unripeTomatoes === 0 ? totalDays : -1);
