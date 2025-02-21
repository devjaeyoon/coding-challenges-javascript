const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function isVPS(str) {
  let cnt = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      cnt += 1;
    }
    if (str[i] === ')') {
      cnt -= 1;
    }
    if (cnt < 0) {
      return false;
    }
  }

  return cnt === 0;
}

const results = input.slice(1).map((str) => (isVPS(str) ? 'YES' : 'NO'));

console.log(results.join('\n'));
