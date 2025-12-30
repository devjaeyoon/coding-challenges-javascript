const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [R, C, N] = input.shift().split(' ').map(Number);
const initialGrid = input.map((line) => line.split(''));

function explode(bombsGrid) {
  const newGrid = Array.from({ length: R }, () => Array(C).fill('O'));

  const dr = [0, 0, 1, -1];
  const dc = [1, -1, 0, 0];

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (bombsGrid[i][j] === 'O') {
        newGrid[i][j] = '.';

        for (let k = 0; k < 4; k++) {
          const nr = i + dr[k];
          const nc = j + dc[k];

          if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
            newGrid[nr][nc] = '.';
          }
        }
      }
    }
  }

  return newGrid;
}

if (N === 1) {
  console.log(initialGrid.map((row) => row.join('')).join('\n'));
} else if (N % 2 === 0) {
  const fullGrid = Array.from({ length: R }, () =>
    Array(C).fill('O').join('')
  ).join('\n');
  console.log(fullGrid);
} else {
  const gridAfter3 = explode(initialGrid);

  if (N % 4 === 3) {
    console.log(gridAfter3.map((row) => row.join('')).join('\n'));
  } else if (N % 4 === 1) {
    const gridAfter5 = explode(gridAfter3);
    console.log(gridAfter5.map((row) => row.join('')).join('\n'));
  }
}
