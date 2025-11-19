const [N, M] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .split(' ')
  .map(BigInt);

let answer = 0n;

if (N === 1n) {
  answer = 1n;
} else if (N === 2n) {
  const count = (M - 1n) / 2n + 1n;
  answer = count > 4n ? 4n : count;
} else {
  if (M < 7n) {
    answer = M > 4n ? 4n : M;
  } else {
    answer = M - 2n;
  }
}

console.log(answer.toString());
