const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const N = Number(input[0]);

const logs = [];
for (let i = 1; i <= N; i++) {
  const [enter, exit] = input[i].split(' ').map(Number);
  logs.push({ type: enter, count: +1 });
  logs.push({ type: exit, count: -1 });
}

logs.sort((a, b) => {
  if (a.type !== b.type) return a.type - b.type;
  return b.count - a.count;
});

let current = 0;
let maxCount = 0;
const intervals = [];

let i = 0;
while (i < logs.length) {
  const time = logs[i].type;
  let delta = 0;

  while (i < logs.length && logs[i].type === time) {
    delta += logs[i].count;
    i++;
  }

  current += delta;
  const nextTime = i < logs.length ? logs[i].type : null;

  if (nextTime !== null && current > 0) {
    if (current > maxCount) {
      maxCount = current;
      intervals.length = 0;
      intervals.push([time, nextTime]);
    } else if (current === maxCount) {
      intervals.push([time, nextTime]);
    }
  }
}

const merged = [];
for (const [start, end] of intervals) {
  if (merged.length === 0) {
    merged.push([start, end]);
  } else {
    const last = merged[merged.length - 1];
    if (last[1] === start) {
      last[1] = end;
    } else {
      merged.push([start, end]);
    }
  }
}

console.log(maxCount);
console.log(merged[0][0], merged[0][1]);
