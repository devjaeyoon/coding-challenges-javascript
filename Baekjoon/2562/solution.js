const numbers = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let maximumValue = numbers[0];
let maximumValueOrder = 0;

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maximumValue) {
    maximumValue = numbers[i];
    maximumValueOrder = i;
  }
}

console.log(maximumValue);
console.log(maximumValueOrder + 1);
