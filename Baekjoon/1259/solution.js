const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length; i++) {
  if (input[i] === '0') {
    break;
  }

  if (input[i] === input[i].split('').reverse().join('')) {
    console.log('yes');
  }
  if (input[i] !== input[i].split('').reverse().join('')) {
    console.log('no');
  }
}
