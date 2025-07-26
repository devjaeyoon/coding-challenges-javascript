const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map((line) => line.split(''));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let redX, redY, blueX, blueY;

for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (board[y][x] === 'R') {
      redY = y;
      redX = x;
      board[y][x] = '.';
    }
    if (board[y][x] === 'B') {
      blueY = y;
      blueX = x;
      board[y][x] = '.';
    }
  }
}

function move(x, y, dx, dy) {
  let distance = 0;

  while (board[y + dy][x + dx] !== '#' && board[y][x] !== 'O') {
    x += dx;
    y += dy;

    distance += 1;

    if (board[y][x] === 'O') {
      break;
    }
  }

  return [x, y, distance];
}

function bfs() {
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () =>
      Array.from({ length: N }, () => Array(M).fill(false))
    )
  );

  const queue = [];
  queue.push([redX, redY, blueX, blueY, 0]);
  visited[redY][redX][blueY][blueX] = true;

  while (queue.length) {
    const [rx, ry, bx, by, depth] = queue.shift();
    if (depth >= 10) {
      return -1;
    }

    for (let i = 0; i < 4; i++) {
      let [nrx, nry, rDist] = move(rx, ry, dx[i], dy[i]);
      let [nbx, nby, bDist] = move(bx, by, dx[i], dy[i]);

      if (board[nby][nbx] === 'O') {
        continue;
      }
      if (board[nry][nrx] === 'O') {
        return depth + 1;
      }

      if (nrx === nbx && nry === nby) {
        if (rDist > bDist) {
          nrx -= dx[i];
          nry -= dy[i];
        } else {
          nbx -= dx[i];
          nby -= dy[i];
        }
      }

      if (!visited[nry][nrx][nby][nbx]) {
        visited[nry][nrx][nby][nbx] = true;
        queue.push([nrx, nry, nbx, nby, depth + 1]);
      }
    }
  }

  return -1;
}

console.log(bfs());
