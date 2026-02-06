const expression = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim();

const pairs = [];
const stack = [];

for (let i = 0; i < expression.length; i++) {
  if (expression[i] === '(') {
    stack.push(i);
  } else if (expression[i] === ')') {
    const start = stack.pop();

    pairs.push([start, i]);
  }
}

const n = pairs.length;
const result = new Set();

for (let i = 1; i < 1 << n; i++) {
  const removeIndices = new Array(expression.length).fill(false);

  for (let j = 0; j < n; j++) {
    if ((i & (1 << j)) !== 0) {
      const [start, end] = pairs[j];

      removeIndices[start] = true;
      removeIndices[end] = true;
    }
  }

  let newExpression = '';
  for (let k = 0; k < expression.length; k++) {
    if (!removeIndices[k]) {
      newExpression += expression[k];
    }
  }

  result.add(newExpression);
}

const sortedResult = [...result].sort();

console.log(sortedResult.join('\n'));
