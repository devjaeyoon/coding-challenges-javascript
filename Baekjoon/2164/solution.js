const N = Number(require('fs').readFileSync('/dev/stdin').toString());

if (N === 1) {
  console.log(1);
} else {
  const exponent = Math.floor(Math.log2(N));
  const largestPower = 2 ** exponent;
  console.log(N === largestPower ? N : 2 * (N - largestPower));
}
