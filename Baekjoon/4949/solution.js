const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function checkStringBalanced(str) {
  const parenthesesStack = [];

  for (const character of str) {
    if (character === '(') {
      parenthesesStack.push('(');
    }
    if (character === '[') {
      parenthesesStack.push('[');
    }
    if (character === ')') {
      const lastStack = parenthesesStack.pop();
      if (lastStack !== '(') {
        return 'no';
      }
    }
    if (character === ']') {
      const lastStack = parenthesesStack.pop();
      if (lastStack !== '[') {
        return 'no';
      }
    }
  }

  return parenthesesStack.length === 0 ? 'yes' : 'no';
}

for (const line of input) {
  if (line === '.') {
    break;
  }

  console.log(checkStringBalanced(line));
}
