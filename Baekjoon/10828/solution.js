const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const stack = [];
let result = '';

for (let i = 1; i <= N; i++) {
  const [cmd, num] = input[i].split(' ');

  if (cmd === 'push') {
    stack.push(Number(num));
  }

  if (cmd === 'pop') {
    if (stack.length === 0) {
      result += '-1\n';
    }
    if (stack.length !== 0) {
      result += `${stack.pop()}\n`;
    }
  }

  if (cmd === 'size') {
    result += `${stack.length}\n`;
  }

  if (cmd === 'empty') {
    if (stack.length === 0) {
      result += '1\n';
    }
    if (stack.length !== 0) {
      result += '0\n';
    }
  }

  if (cmd === 'top') {
    if (stack.length === 0) {
      result += '-1\n';
    }
    if (stack.length !== 0) {
      result += `${stack[stack.length - 1]}\n`;
    }
  }
}

console.log(result.trim());
