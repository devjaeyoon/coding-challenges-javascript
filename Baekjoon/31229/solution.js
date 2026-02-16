const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString(),
);

const output = [];

for (let i = 0; i < N; i++) {
  output.push(2 * i + 1);
}

console.log(output.join(' '));
