const [X, Y, D, T] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const dist = Math.sqrt(X * X + Y * Y);

if (D <= T) {
  console.log(dist.toFixed(13));
} else {
  const n = Math.floor(dist / D);
  let minTime = dist;

  minTime = Math.min(minTime, n * T + (dist - n * D));
  minTime = Math.min(minTime, (n + 1) * T + ((n + 1) * D - dist));

  if (n > 0) {
    minTime = Math.min(minTime, (n + 1) * T);
  } else {
    minTime = Math.min(minTime, 2.0 * T);
  }

  console.log(minTime.toFixed(13));
}
