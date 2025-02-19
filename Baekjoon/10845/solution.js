const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const queue = [];
let result = '';

for (let i = 1; i <= N; i++) {
  const [cmd, num] = input[i].split(' ');

  if (cmd === 'push') {
    queue.push(Number(num));
  }

  if (cmd === 'pop') {
    if (queue.length === 0) {
      result += '-1\n';
    }
    if (queue.length !== 0) {
      result += `${queue.shift()}\n`;
    }
  }

  if (cmd === 'size') {
    result += `${queue.length}\n`;
  }

  if (cmd === 'empty') {
    if (queue.length === 0) {
      result += '1\n';
    }
    if (queue.length !== 0) {
      result += '0\n';
    }
  }

  if (cmd === 'front') {
    if (queue.length === 0) {
      result += '-1\n';
    }
    if (queue.length !== 0) {
      result += `${queue[0]}\n`;
    }
  }

  if (cmd === 'back') {
    if (queue.length === 0) {
      result += '-1\n';
    }
    if (queue.length !== 0) {
      result += `${queue[queue.length - 1]}\n`;
    }
  }
}

console.log(result.trim());
