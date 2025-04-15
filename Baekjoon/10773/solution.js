const numbers = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number)
  .slice(1);

const stack = [];

for (const number of numbers) {
  if (number === 0) {
    stack.pop();
    continue;
  }
  stack.push(number);
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));
