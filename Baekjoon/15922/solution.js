const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

let lineIdx = 0;
const N = Number(input[lineIdx++]);

let [currentStart, currentEnd] = input[lineIdx++].trim().split(' ').map(Number);
let totalLength = 0;

for (let i = 1; i < N; i++) {
  const [nextStart, nextEnd] = input[lineIdx++].trim().split(' ').map(Number);

  if (nextStart <= currentEnd) {
    currentEnd = Math.max(currentEnd, nextEnd);
  } else {
    totalLength += currentEnd - currentStart;

    currentStart = nextStart;
    currentEnd = nextEnd;
  }
}

totalLength += currentEnd - currentStart;

console.log(totalLength);
