const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let idx = 0;

while (idx < input.length) {
  const M = Number(input[idx++]);
  if (Number.isNaN(M)) {
    break;
  }

  const segments = [];

  while (idx < input.length) {
    const [L, R] = input[idx++].split(' ').map(Number);

    if (L === 0 && R === 0) {
      break;
    }

    segments.push([L, R]);
  }

  segments.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }

    return a[0] - b[0];
  });

  let count = 0;
  let currentEnd = 0;
  let i = 0;
  let maxReach = 0;
  let found = true;

  while (currentEnd < M) {
    let best = -1;

    while (i < segments.length && segments[i][0] <= currentEnd) {
      if (segments[i][1] > maxReach) {
        maxReach = segments[i][1];
        best = i;
      }
      i++;
    }

    if (best === -1) {
      found = false;
      break;
    }

    count++;
    currentEnd = maxReach;
  }

  console.log(found ? count : 0);
}
