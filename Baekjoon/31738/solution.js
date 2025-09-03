const [strN, strM] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const N = BigInt(strN);
const M = Number(strM);

if (N >= M) {
  console.log(0);
} else {
  const bigIntM = BigInt(M);
  const numberN = Number(N);
  let result = 1n;

  for (let i = 2; i <= numberN; i++) {
    result = (result * BigInt(i)) % bigIntM;
  }

  console.log(Number(result));
}
