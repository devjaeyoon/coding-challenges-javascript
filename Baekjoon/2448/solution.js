const N = Number(require('fs').readFileSync('/dev/stdin').toString());
const starCanvas = Array.from({ length: N }, () => Array(2 * N - 1).fill(' '));

function drawStar(y, x, size) {
  if (size === 3) {
    starCanvas[y][x] = '*';
    starCanvas[y + 1][x - 1] = '*';
    starCanvas[y + 1][x + 1] = '*';
    for (let i = -2; i <= 2; i++) {
      starCanvas[y + 2][x + i] = '*';
    }
    return;
  }

  const half = size / 2;
  drawStar(y, x, half);
  drawStar(y + half, x - half, half);
  drawStar(y + half, x + half, half);
}

drawStar(0, N - 1, N);

console.log(starCanvas.map((row) => row.join('')).join('\n'));
