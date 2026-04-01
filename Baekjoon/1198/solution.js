const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());

const points = input.map((line) => {
  const [x, y] = line.trim().split(/\s+/).map(Number);

  return { x, y };
});

let maxArea = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      const p1 = points[i];
      const p2 = points[j];
      const p3 = points[k];

      const area =
        Math.abs(
          p1.x * p2.y +
            p2.x * p3.y +
            p3.x * p1.y -
            (p2.x * p1.y + p3.x * p2.y + p1.x * p3.y),
        ) / 2;

      if (area > maxArea) {
        maxArea = area;
      }
    }
  }
}

console.log(maxArea);
