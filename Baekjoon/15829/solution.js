const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const L = Number(input[0]);
const str = input[1];
const r = 31;
const M = 1234567891;

let result = 0;

let rPow = 1;
for (let i = 0; i < L; i++) {
  const charCode = str.charCodeAt(i) - 96;
  result = (result + charCode * rPow) % M;
  rPow = (rPow * r) % M;
}

console.log(result);
