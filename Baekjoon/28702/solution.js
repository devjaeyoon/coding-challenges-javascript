const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length; i++) {
  if (Number.isInteger(Number(input[i]))) {
    const nextNumber = Number(input[i]) + 3 - i;

    if (nextNumber % 15 === 0) {
      console.log('FizzBuzz');
    } else if (nextNumber % 3 === 0 && nextNumber % 5 !== 0) {
      console.log('Fizz');
    } else if (nextNumber % 3 !== 0 && nextNumber % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(nextNumber);
    }

    break;
  }
}
