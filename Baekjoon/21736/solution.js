const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const graph = [];
let startXpos = -1;
let startYpos = -1;

for (let i = 1; i <= N; i++) {
  const splitedInput = input[i].split('');

  if (splitedInput.includes('I')) {
    startXpos = splitedInput.indexOf('I');
    startYpos = i - 1;
  }

  graph.push(splitedInput);
}

let friends = 0;

function bfs(graph, startXpos, startYpos) {
  const queue = [[startYpos, startXpos]];
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  visited[startYpos][startXpos] = true;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (queue.length !== 0) {
    const [yPos, xPos] = queue.shift();

    if (graph[yPos][xPos] === 'P') {
      friends += 1;
    }

    for (const [dy, dx] of directions) {
      const nx = xPos + dx;
      const ny = yPos + dy;

      if (nx >= 0 && nx < M && ny >= 0 && ny < N && !visited[ny][nx] && graph[ny][nx] !== 'X') {
        visited[ny][nx] = true;
        queue.push([ny, nx]);
      }
    }
  }
}

bfs(graph, startXpos, startYpos);

console.log(friends === 0 ? 'TT' : friends);
