const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString()
);

const MOD = 1000000000;

if (N === 1) {
  console.log(0);
  process.exit();
}

let waysNMinus2 = 0;
let waysNMinus1 = 1;

for (let i = 3; i <= N; i++) {
  const currentWays = ((i - 1) * (waysNMinus1 + waysNMinus2)) % MOD;

  waysNMinus2 = waysNMinus1;
  waysNMinus1 = currentWays;
}

console.log(waysNMinus1);
