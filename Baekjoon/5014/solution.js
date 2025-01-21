const [F, S, G, U, D] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const visited = new Array(F + 1).fill(false);
let result = -1;

function bfs(start, cnt) {
  const queue = [[start, cnt]];

  while (queue.length !== 0) {
    const [floor, cnt] = queue.shift();

    if (floor === G) {
      result = cnt;
    }

    if (floor - D >= 1 && !visited[floor - D]) {
      visited[floor - D] = true;
      queue.push([floor - D, cnt + 1]);
    }

    if (floor + U <= F && !visited[floor + U]) {
      visited[floor + U] = true;
      queue.push([floor + U, cnt + 1]);
    }
  }
}

bfs(S, 0);

console.log(result === -1 ? 'use the stairs' : result);
