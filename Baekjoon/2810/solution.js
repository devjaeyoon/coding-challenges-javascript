const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const audience = [...input[0]];
const splitedAudience = [];

for (let i = 0; i < audience.length; i++) {
  if (audience[i] === 'L') {
    splitedAudience.push('LL');
    i += 1;
    continue;
  }
  if (audience[i] === 'S') {
    splitedAudience.push('S');
    continue;
  }
}

console.log(Math.min(N, splitedAudience.length + 1));
