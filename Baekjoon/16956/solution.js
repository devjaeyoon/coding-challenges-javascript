const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [R, C] = input.shift().split(' ').map(Number);

const grid = input.map((line) => line.split(''));

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

let possible = true;

for (let r = 0; r < R; r++) {
  for (let c = 0; c < C; c++) {
    if (grid[r][c] === 'W') {
      for (let i = 0; i < 4; i++) {
        const nr = r + dr[i];
        const nc = c + dc[i];

        if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
          if (grid[nr][nc] === 'S') {
            possible = false;
          }
        }
      }
    }
  }
}

if (!possible) {
  console.log(0);
} else {
  console.log(1);
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (grid[r][c] === '.') {
        grid[r][c] = 'D';
      }
    }
  }

  console.log(grid.map((row) => row.join('')).join('\n'));
}
