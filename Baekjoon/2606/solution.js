const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const computer = Number(input[0]);
const networkCnt = Number(input[1]);
const graph = Array.from(Array(computer + 1), () => new Array(computer + 1).fill(0));

for (let i = 2; i < 2 + networkCnt; i++) {
  const [row, col] = input[i].split(' ').map(Number);
  graph[row][col] = 1;
  graph[col][row] = 1;
}

let count = 0;

const dfsVisited = new Array(computer + 1).fill(false);

function dfs(node) {
  dfsVisited[node] = true;

  for (let i = 1; i < graph.length; i++) {
    if (graph[node][i] === 1 && dfsVisited[i] === false) {
      count += 1;
      dfs(i);
    }
  }
}

dfs(1);

console.log(count);
