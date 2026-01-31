const k = BigInt(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString(),
);

function countInversions(n) {
  if (n === 1n) return 0;

  let size = 1n;
  while (size * 2n < n) {
    size *= 2n;
  }

  return 1 + countInversions(n - size);
}

const inversions = countInversions(k);

console.log(inversions % 2 === 0 ? '0' : '1');
