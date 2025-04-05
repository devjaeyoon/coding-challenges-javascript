const [A, B, C] = require('fs')
  .readFileSync('/dev/stdin', 'utf-8')
  .toString()
  .trim()
  .split(' ')
  .map(BigInt);

function modPow(num1, num2, num3) {
  let result = 1n;
  num1 = num1 % num3;

  while (num2 > 0n) {
    if (num2 % 2n === 1n) {
      result = (result * num1) % num3;
    }
    num1 = (num1 * num1) % num3;
    num2 = num2 / 2n;
  }

  return result;
}

console.log(modPow(A, B, C).toString());
