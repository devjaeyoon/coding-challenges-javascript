const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [R, C] = input.shift().split(' ').map(Number);
const map = input.splice(0, R).map((line) => line.split(''));
const N = Number(input.shift());
const heights = input[0].split(' ').map((height) => R - Number(height));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function throwStick(row, fromLeft) {
  if (fromLeft) {
    for (let col = 0; col < C; col++) {
      if (map[row][col] === 'x') {
        map[row][col] = '.';
        return;
      }
    }
  } else {
    for (let col = C - 1; col >= 0; col--) {
      if (map[row][col] === 'x') {
        map[row][col] = '.';
        return;
      }
    }
  }
}

function bfs(startX, startY, visited) {
  const queue = [[startX, startY]];
  const cluster = [[startX, startY]];
  visited[startX][startY] = true;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= R || ny >= C) {
        continue;
      }
      if (visited[nx][ny] || map[nx][ny] !== 'x') {
        continue;
      }

      visited[nx][ny] = true;
      queue.push([nx, ny]);
      cluster.push([nx, ny]);
    }
  }

  return cluster;
}

function getFloatingCluster() {
  const visited = Array.from({ length: R }, () => Array(C).fill(false));

  for (let col = 0; col < C; col++) {
    if (map[R - 1][col] === 'x' && !visited[R - 1][col]) {
      bfs(R - 1, col, visited);
    }
  }

  const floatCluster = [];
  for (let x = 0; x < R; x++) {
    for (let y = 0; y < C; y++) {
      if (map[x][y] === 'x' && !visited[x][y]) {
        floatCluster.push(...bfs(x, y, visited));
      }
    }
  }

  return floatCluster.length > 0 ? floatCluster : null;
}

function dropCluster(cluster) {
  for (const [x, y] of cluster) {
    map[x][y] = '.';
  }

  let dropDist = 0;
  let canDrop = true;

  while (canDrop) {
    for (const [x, y] of cluster) {
      const nx = x + dropDist + 1;

      if (
        nx >= R ||
        (map[nx][y] === 'x' &&
          !cluster.some(([cx, cy]) => cx === nx && cy === y))
      ) {
        canDrop = false;
        break;
      }
    }

    if (canDrop) {
      dropDist++;
    }
  }

  for (const [x, y] of cluster) {
    map[x + dropDist][y] = 'x';
  }
}

for (let i = 0; i < N; i++) {
  const height = heights[i];
  const fromLeft = i % 2 === 0;

  throwStick(height, fromLeft);

  const cluster = getFloatingCluster();
  if (cluster) {
    dropCluster(cluster);
  }
}

console.log(map.map((row) => row.join('')).join('\n'));
