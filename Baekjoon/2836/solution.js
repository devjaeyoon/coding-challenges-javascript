const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const reversePassengers = [];

for (let i = 0; i < N; i++) {
  const [start, end] = input[i].split(' ').map(Number);

  if (start > end) {
    reversePassengers.push([end, start]);
  }
}

let totalDistance = M;

if (reversePassengers.length > 0) {
  reversePassengers.sort((a, b) => a[0] - b[0]);

  let mergedLength = 0;
  let [currentStart, currentEnd] = reversePassengers[0];

  for (let i = 1; i < reversePassengers.length; i++) {
    const [nextStart, nextEnd] = reversePassengers[i];

    if (nextStart <= currentEnd) {
      currentEnd = Math.max(currentEnd, nextEnd);
    } else {
      mergedLength += currentEnd - currentStart;
      currentStart = nextStart;
      currentEnd = nextEnd;
    }
  }

  mergedLength += currentEnd - currentStart;

  totalDistance += mergedLength * 2;
}

console.log(totalDistance);
