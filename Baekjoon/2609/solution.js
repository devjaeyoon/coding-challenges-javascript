const [a, b] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function gcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  } else {
    return gcd(num2, num1 % num2);
  }
}

if (a > b) {
  console.log(gcd(a, b));
} else {
  console.log(gcd(b, a));
}

if (a > b) {
  console.log((a * b) / gcd(a, b));
} else {
  console.log((a * b) / gcd(b, a));
}
