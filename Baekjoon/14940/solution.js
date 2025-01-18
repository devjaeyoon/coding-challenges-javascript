const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const queue = [];
const graph = [];
const distances = Array.from({ length: n }, () => new Array(m).fill(-1));

for (let i = 1; i <= n; i++) {
  const row = input[i].split(' ').map(Number);
  for (let j = 0; j < m; j++) {
    if (row[j] === 2) {
      queue.push([i - 1, j]);
      distances[i - 1][j] = 0;
    }
    if (row[j] === 0) {
      distances[i - 1][j] = 0;
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

while (queue.length > 0) {
  const [y, x] = queue.shift();

  for (const [dy, dx] of directions) {
    const ny = y + dy;
    const nx = x + dx;

    if (ny >= 0 && ny < n && nx >= 0 && nx < m && distances[ny][nx] === -1 && graph[ny][nx] === 1) {
      distances[ny][nx] = distances[y][x] + 1;
      queue.push([ny, nx]);
    }
  }
}

console.log(distances.map((row) => row.join(' ')).join('\n'));
