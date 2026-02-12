const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());

const adj = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));

for (let i = 0; i < N - 1; i++) {
  const [u, v] = input[i].trim().split(/\s+/).map(Number);

  adj[u][v] = true;
  adj[v][u] = true;
}

const newBridges = [];
let diameter = 0;

if (N <= 4) {
  diameter = 1;

  for (let i = 1; i <= N; i++) {
    for (let j = i + 1; j <= N; j++) {
      if (!adj[i][j]) {
        newBridges.push(`${i} ${j}`);
      }
    }
  }
} else {
  diameter = 2;

  for (let i = 2; i <= N; i++) {
    if (!adj[1][i]) {
      newBridges.push(`1 ${i}`);
    }
  }
}

console.log(newBridges.length);
console.log(diameter);
if (newBridges.length > 0) {
  console.log(newBridges.join('\n'));
}
