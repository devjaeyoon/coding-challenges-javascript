const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(Number);
const graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));

for (let i = 1; i <= M; i++) {
  const [row, column] = input[i].split(' ').map(Number);
  graph[row][column] = 1;
  graph[column][row] = 1;
}

const dfsVisited = new Array(N + 1).fill(false);
const dfsResult = [];
const bfsVisited = new Array(N + 1).fill(false);
const bfsResult = [];

function dfs(V) {
  dfsVisited[V] = true;
  dfsResult.push(V);

  for (let i = 1; i < graph.length; i++) {
    if (graph[V][i] === 1 && dfsVisited[i] === false) {
      dfs(i);
    }
  }
}

function bfs(V) {
  const queue = [];

  bfsVisited[V] = true;
  bfsResult.push(V);
  queue.push(V);

  while (queue.length !== 0) {
    const dequeue = queue.shift();

    for (let i = 1; i < graph.length; i++) {
      if (graph[dequeue][i] === 1 && bfsVisited[i] === false) {
        bfsVisited[i] = true;
        queue.push(i);
        bfsResult.push(i);
      }
    }
  }
}

dfs(V);
bfs(V);

console.log(dfsResult.join(' '));
console.log(bfsResult.join(' '));
