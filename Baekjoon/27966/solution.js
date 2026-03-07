const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString(),
);

const minDistance = BigInt(N - 1) * BigInt(N - 1);

const edges = [];
for (let i = 2; i <= N; i++) {
  edges.push(`1 ${i}`);
}

console.log(minDistance.toString());
console.log(edges.join('\n'));
