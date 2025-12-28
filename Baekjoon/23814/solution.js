const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const D = BigInt(input[0]);
const [N, M, K] = input[1].split(' ').map(BigInt);

let maxMandu = -1n;
let maxRice = -1n;

function update(mandu, rice) {
  if (mandu > maxMandu) {
    maxMandu = mandu;
    maxRice = rice;
  } else if (mandu === maxMandu) {
    if (rice > maxRice) {
      maxRice = rice;
    }
  }
}

function calculateMandu(n, m, k, d) {
  return n / d + m / d + k / d;
}

const needN = N % D === 0n ? 0n : D - (N % D);
const needM = M % D === 0n ? 0n : D - (M % D);

update(calculateMandu(N, M, K, D), K);

if (K >= needN) {
  const restK = K - needN;
  update(calculateMandu(N + needN, M, restK, D), restK);
}

if (K >= needM) {
  const restK = K - needM;
  update(calculateMandu(N, M + needM, restK, D), restK);
}

if (K >= needN + needM) {
  const restK = K - needN - needM;
  update(calculateMandu(N + needN, M + needM, restK, D), restK);
}

console.log(maxRice.toString());
