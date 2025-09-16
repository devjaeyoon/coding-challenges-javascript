const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const M = Number(input.shift());
const streetLightLocations = input[0].split(' ').map(Number);
let maxHeight = streetLightLocations[0];

maxHeight = Math.max(maxHeight, N - streetLightLocations[M - 1]);

for (let i = 0; i < M - 1; i++) {
  const distance = streetLightLocations[i + 1] - streetLightLocations[i];
  const requiredHeight = Math.ceil(distance / 2);

  maxHeight = Math.max(maxHeight, requiredHeight);
}

console.log(maxHeight);
