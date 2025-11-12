const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = (left + right) >> 1;

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

let trashSet = new Set();
let geunseongPos = 0;
let totalDistance = 0;

for (let i = 0; i < N; i++) {
  const query = input[i].split(' ').map(Number);
  const type = query[0];

  if (type === 1) {
    const x = query[1];
    trashSet.add(x);
  } else {
    if (trashSet.size === 0) {
      continue;
    }

    const trashArray = Array.from(trashSet).sort((a, b) => a - b);
    const K = trashArray.length;
    let currentPos = geunseongPos;
    let queryDistance = 0;

    let idx = lowerBound(trashArray, currentPos);

    let l = idx - 1;
    let r = idx;

    for (let j = 0; j < K; j++) {
      const distL = l >= 0 ? Math.abs(trashArray[l] - currentPos) : Infinity;
      const distR = r < K ? Math.abs(trashArray[r] - currentPos) : Infinity;

      if (distL <= distR) {
        queryDistance += distL;
        currentPos = trashArray[l];
        l--;
      } else {
        queryDistance += distR;
        currentPos = trashArray[r];
        r++;
      }
    }

    totalDistance += queryDistance;
    geunseongPos = currentPos;
    trashSet.clear();
  }
}

console.log(totalDistance);
