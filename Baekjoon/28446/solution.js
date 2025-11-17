const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const M = Number(input.shift());
const bowlingBallMap = new Map();
const results = [];

for (let i = 0; i < M; i++) {
  const [type, ...args] = input[i].split(' ').map(Number);

  if (type === 1) {
    const [x, w] = args;
    bowlingBallMap.set(w, x);
  } else if (type === 2) {
    const [w] = args;
    const lockerNumber = bowlingBallMap.get(w);
    results.push(lockerNumber);
  }
}

console.log(results.join('\n'));
