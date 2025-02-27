const [N, K] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function factorial(num) {
  return num ? num * factorial(num - 1) : 1;
}

console.log(factorial(N) / (factorial(N - K) * factorial(K)));
