const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString(),
);

const output = [];
const mid = Math.floor(N / 2);

for (let i = 1; i <= mid; i++) {
  output.push(mid + i);
  output.push(i);
}

if (N % 2 !== 0) {
  output.push(N);
}

console.log(output.join(' '));
