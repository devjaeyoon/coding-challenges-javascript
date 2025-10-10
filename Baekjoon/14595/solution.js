const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const M = Number(input.shift());

if (M === 0) {
  console.log(N);

  return;
}

const actions = [];
for (let i = 0; i < M; i++) {
  actions.push(input[i].split(' ').map(Number));
}

actions.sort((a, b) => a[0] - b[0]);

const merged = [];
let [currentStart, currentEnd] = actions[0];

for (let i = 1; i < M; i++) {
  const [nextStart, nextEnd] = actions[i];

  if (nextStart <= currentEnd) {
    currentEnd = Math.max(currentEnd, nextEnd);
  } else {
    merged.push([currentStart, currentEnd]);
    currentStart = nextStart;
    currentEnd = nextEnd;
  }
}

merged.push([currentStart, currentEnd]);

let destroyedWalls = 0;
for (const [start, end] of merged) {
  destroyedWalls += end - start;
}

console.log(N - destroyedWalls);
