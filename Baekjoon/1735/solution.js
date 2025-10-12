function getGcd(a, b) {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

function getLcm(a, b) {
  return (a * b) / getGcd(a, b);
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [num1, den1] = input[0].split(' ').map(Number);
const [num2, den2] = input[1].split(' ').map(Number);

const resultNum = num1 * den2 + num2 * den1;
const resultDen = den1 * den2;

const gcd = getGcd(resultNum, resultDen);

console.log(`${resultNum / gcd} ${resultDen / gcd}`);
