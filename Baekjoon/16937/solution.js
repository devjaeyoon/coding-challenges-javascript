const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [H, W] = input.shift().split(' ').map(Number);
const N = input.shift().split(' ').map(Number);

const stickers = [];
for (let i = 0; i < N; i++) {
  const [r, c] = input[i].split(' ').map(Number);

  stickers.push({ r, c });
}

let maxArea = 0;
for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    const s1 = stickers[i];
    const s2 = stickers[j];

    const currentArea = s1.r * s1.c + s2.r * s2.c;

    const orientations = [
      [s1.r, s1.c, s2.r, s2.c],
      [s1.c, s1.r, s2.r, s2.c],
      [s1.r, s1.c, s2.c, s2.r],
      [s1.c, s1.r, s2.c, s2.r],
    ];

    let canAttach = false;

    for (const [r1, c1, r2, c2] of orientations) {
      if (c1 + c2 <= W && Math.max(r1, r2) <= H) {
        canAttach = true;
        break;
      }

      if (r1 + r2 <= H && Math.max(c1, c2) <= W) {
        canAttach = true;
        break;
      }
    }

    if (canAttach) {
      maxArea = Math.max(maxArea, currentArea);
    }
  }
}

console.log(maxArea);
