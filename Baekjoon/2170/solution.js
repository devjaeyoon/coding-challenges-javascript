const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const intervals = input.map((line) => {
  const [x, y] = line.split(' ').map(Number);

  return [x, y];
});

intervals.sort((a, b) => a[0] - b[0]);

let totalLength = 0;
let [curStart, curEnd] = intervals[0];

for (let i = 1; i < N; i++) {
  const [nextStart, nextEnd] = intervals[i];

  if (nextStart <= curEnd) {
    curEnd = Math.max(curEnd, nextEnd);
  } else {
    totalLength += curEnd - curStart;
    [curStart, curEnd] = [nextStart, nextEnd];
  }
}

totalLength += curEnd - curStart;

console.log(totalLength);
