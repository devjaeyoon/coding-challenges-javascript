const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(' ');

const X = BigInt(input[0]);
let K = BigInt(input[1]);

let Y = 0n;
let shiftX = 0n;

while (K > 0n) {
  if (((X >> shiftX) & 1n) === 0n) {
    const kBit = K & 1n;

    Y |= kBit << shiftX;

    K >>= 1n;
  }
  shiftX++;
}

console.log(Y.toString());
