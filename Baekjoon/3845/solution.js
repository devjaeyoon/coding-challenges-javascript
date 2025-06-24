const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let index = 0;

function isCovered(positions, length, w) {
  if (positions.length === 0) {
    return false;
  }

  const intervals = positions.map((pos) => [pos - w / 2, pos + w / 2]);

  intervals.sort((a, b) => a[0] - b[0]);

  let covered = 0;

  for (const [start, end] of intervals) {
    if (start > covered + 1e-6) {
      return false;
    }
    covered = Math.max(covered, end);
  }

  return covered >= length - 1e-6;
}

while (true) {
  const [nx, ny, wStr] = input[index++].split(' ');
  const w = parseFloat(wStr);
  const nxInt = parseInt(nx);
  const nyInt = parseInt(ny);

  if (nxInt === 0 && nyInt === 0 && w === 0.0) {
    break;
  }

  const xList = input[index++].split(' ').map(Number);
  const yList = input[index++].split(' ').map(Number);

  const xOK = isCovered(xList, 75, w);
  const yOK = isCovered(yList, 100, w);

  console.log(xOK && yOK ? 'YES' : 'NO');
}
