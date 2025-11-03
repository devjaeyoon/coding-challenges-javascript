const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const energies = [];
for (let i = 0; i < N; i++) {
  energies.push(Number(input[i]));
}

const protonSet = new Set();
for (let i = 0; i < M; i++) {
  protonSet.add(Number(input[N + i]));
}

const adj = Array.from({ length: N }, () => []);
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    const diff = Math.abs(energies[i] - energies[j]);
    if (protonSet.has(diff)) {
      adj[i].push(j);
      adj[j].push(i);
    }
  }
}

const dp = Array.from({ length: N }, () => [0, 0]);
const visited = new Array(N).fill(false);

function dfs(currentNode, parentNode) {
  visited[currentNode] = true;

  dp[currentNode][1] = energies[currentNode];
  dp[currentNode][0] = 0;

  for (const neighbor of adj[currentNode]) {
    if (neighbor === parentNode) continue;

    dfs(neighbor, currentNode);

    dp[currentNode][0] += Math.max(dp[neighbor][0], dp[neighbor][1]);
    dp[currentNode][1] += dp[neighbor][0];
  }
}

let totalMaxEnergy = 0;
for (let i = 0; i < N; i++) {
  if (!visited[i]) {
    dfs(i, -1);

    totalMaxEnergy += Math.max(dp[i][0], dp[i][1]);
  }
}

console.log(totalMaxEnergy);
