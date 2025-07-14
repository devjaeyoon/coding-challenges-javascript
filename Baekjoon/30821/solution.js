const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

const numerator = N * (N - 1) * (N - 2) * (N - 3) * (N - 4);

const denominator = 120;

const result = numerator / denominator;

console.log(result);
