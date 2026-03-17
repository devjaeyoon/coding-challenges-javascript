const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const lines = input
  .map((line) => line.trim())
  .filter((line) => line.length > 0);

const T = Number(lines.shift());
const results = [];

for (let i = 0; i < T; i++) {
  const [a, b, c, d] = lines[i].split(/\s+/).map(BigInt);

  const arr = [a, b, c].sort((x, y) => (x < y ? -1 : x > y ? 1 : 0));
  let sum = arr[0] + arr[1] + arr[2] - d;

  const shortestSide = arr[0] < sum / 3n ? arr[0] : sum / 3n;
  sum -= shortestSide;

  const middleSide = arr[1] < sum / 2n ? arr[1] : sum / 2n;
  sum -= middleSide;

  const longestSide = sum;

  results.push((shortestSide * middleSide * longestSide).toString());
}

console.log(results.join('\n'));
