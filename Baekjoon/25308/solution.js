const numbers = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const ux = [];
const uy = [];
for (let k = 0; k < 8; k++) {
  const theta = (2 * Math.PI * k) / 8;
  ux[k] = Math.cos(theta);
  uy[k] = Math.sin(theta);
}

const idx = [0, 1, 2, 3, 4, 5, 6, 7];
let count = 0;

function permute(pos) {
  if (pos === 8) {
    const x = new Array(8);
    const y = new Array(8);
    let posCross = false;
    let negCross = false;

    for (let k = 0; k < 8; k++) {
      const r = numbers[idx[k]];
      x[k] = r * ux[k];
      y[k] = r * uy[k];
    }

    for (let k = 0; k < 8; k++) {
      const k1 = (k + 1) & 7;
      const k2 = (k + 2) & 7;
      const vx1 = x[k1] - x[k];
      const vy1 = y[k1] - y[k];
      const vx2 = x[k2] - x[k1];
      const vy2 = y[k2] - y[k1];
      const cross = vx1 * vy2 - vy1 * vx2;
      if (cross > 1e-9) {
        posCross = true;
      }
      if (cross < -1e-9) {
        negCross = true;
      }
      if (posCross && negCross) {
        return;
      }
    }
    count++;
    return;
  }

  for (let i = pos; i < 8; i++) {
    [idx[pos], idx[i]] = [idx[i], idx[pos]];
    permute(pos + 1);
    [idx[pos], idx[i]] = [idx[i], idx[pos]];
  }
}

permute(0);
console.log(count);
