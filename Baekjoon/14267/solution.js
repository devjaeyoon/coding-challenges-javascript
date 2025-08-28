const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const supervisors = input.shift().split(' ').map(Number);

const adj = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i < n; i++) {
  const employee = i + 1;
  const supervisor = supervisors[i];

  if (supervisor !== -1) {
    adj[supervisor].push(employee);
  }
}

const praiseAmounts = Array(n + 1).fill(0);
for (let i = 0; i < m; i++) {
  const [employee, weight] = input[i].split(' ').map(Number);
  praiseAmounts[employee] += weight;
}

function dfs(supervisor) {
  for (const subordinate of adj[supervisor]) {
    praiseAmounts[subordinate] += praiseAmounts[supervisor];
    dfs(subordinate);
  }
}

dfs(1);

console.log(praiseAmounts.slice(1).join(' '));
