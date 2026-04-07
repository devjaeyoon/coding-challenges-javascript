const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [w, h] = input[0].split(/\s+/).map(Number);
const [p, q] = input[1].split(/\s+/).map(Number);
const t = Number(input[2]);

let x = (p + t) % (2 * w);
let y = (q + t) % (2 * h);

if (x > w) {
  x = 2 * w - x;
}

if (y > h) {
  y = 2 * h - y;
}

console.log(`${x} ${y}`);
