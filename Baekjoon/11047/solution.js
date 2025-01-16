const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, K] = input[0].split(' ').map(Number);
const coins = [];

for (let i = 1; i <= N; i++) {
  coins.push(Number(input[i]));
}

let result = 0;

for (let i = coins.length - 1; i >= 0; i--) {
  if (K >= coins[i]) {
    result += Math.floor(K / coins[i]);
    K %= coins[i];
  }
}

console.log(result);
