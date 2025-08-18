const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const numbers = input.map(Number);

numbers.sort((a, b) => a - b);

const diffs = [];
for (let i = 1; i < N; i++) {
  diffs.push(numbers[i] - numbers[i - 1]);
}

function gcd(a, b) {
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

let resultGcd = diffs[0];
for (let i = 1; i < diffs.length; i++) {
  resultGcd = gcd(resultGcd, diffs[i]);
}

const divisors = new Set();
for (let i = 2; i <= Math.sqrt(resultGcd); i++) {
  if (resultGcd % i === 0) {
    divisors.add(i);
    divisors.add(resultGcd / i);
  }
}
divisors.add(resultGcd);

const sortedDivisors = Array.from(divisors).sort((a, b) => a - b);
console.log(sortedDivisors.join(' '));
