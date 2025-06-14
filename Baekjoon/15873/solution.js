const numbers = require('fs').readFileSync('/dev/stdin').toString().trim();
let result = 0;

if (numbers.length === 4) {
  console.log(20);
}

if (numbers.length === 3) {
  if (numbers[0] === '1' && numbers[1] === '0') {
    console.log(10 + Number(numbers[2]));
  }

  if (numbers[1] === '1' && numbers[2] === '0') {
    console.log(10 + Number(numbers[0]));
  }
}

if (numbers.length === 2) {
  console.log(Number(numbers[0]) + Number(numbers[1]));
}
