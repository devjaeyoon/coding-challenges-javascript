const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, L] = input[0].split(' ').map(Number);
const lightCoordinates = input[1].split(' ').map(Number);

lightCoordinates.sort((a, b) => a - b);

let output = 0;
let curStart = -Infinity;
let curEnd = -Infinity;

for (let i = 0; i < N - 1; i++) {
  const overlapStart = lightCoordinates[i + 1] - L;
  const overlapEnd = lightCoordinates[i] + L;

  if (overlapStart < overlapEnd) {
    if (overlapStart <= curEnd) {
      curEnd = Math.max(curEnd, overlapEnd);
    } else {
      if (curStart !== -Infinity) {
        output += curEnd - curStart;
      }
      curStart = overlapStart;
      curEnd = overlapEnd;
    }
  }
}

if (curStart !== -Infinity) {
  output += curEnd - curStart;
}

console.log(output);
