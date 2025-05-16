const [x, y, c] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let start = 0;
let mid = 0;
let end = Math.min(x, y);

for (let i = 0; i < 100; i++) {
  mid = (start + end) / 2;
  const h1 = Math.sqrt(x * x - mid * mid);
  const h2 = Math.sqrt(y * y - mid * mid);
  const crossingHeight = (h1 * h2) / (h1 + h2);

  if (crossingHeight > c) {
    start = mid;
  } else {
    end = mid;
  }
}

console.log(mid.toFixed(3));
