const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString();

let N = BigInt(input);
let answer = 0n;
let power = 1n;

while (N > 0n) {
  if (N & 1n) {
    answer += power;
  }

  power *= 3n;

  N >>= 1n;
}

console.log(answer.toString());
