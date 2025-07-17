const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function gcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  } else {
    return gcd(num2, num1 % num2);
  }
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const [a, b] = input[i].split(' ').map(Number);

  const l = lcm(a, b);
  const g = gcd(a, b);

  console.log(`${l} ${g}`);
}
