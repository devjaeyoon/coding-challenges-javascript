const N = BigInt(require('fs').readFileSync('/dev/stdin').toString());

let result = 0n;

if (N === 1n) {
  result = 1n;
} else {
  result = 2n * N - 2n;
}

console.log(result.toString());
