const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString(),
);

const result = [];

for (let i = 0; i < N; i++) {
  result.push(2 * i + 1);
}

console.log(result.join(' '));
