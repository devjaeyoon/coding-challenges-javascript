const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
let output = '';
let flag = true;

for (let i = 0; i < input[0].length; i++) {
  let str = input[0][i];

  for (let j = 1; j < N; j++) {
    if (str !== input[j][i]) {
      flag = false;
    }
  }

  if (flag) {
    output += str;
  } else {
    output += '?';
  }
  flag = true;
}

console.log(output);
