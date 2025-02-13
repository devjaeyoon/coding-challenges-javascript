const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const sizes = input[1].split(' ').map(Number);
const [T, P] = input[2].split(' ').map(Number);
let tShirtBundles = 0;

for (const size of sizes) {
  tShirtBundles += Math.ceil(size / T);
}

console.log(tShirtBundles);
console.log(Math.floor(N / P), N % P);
