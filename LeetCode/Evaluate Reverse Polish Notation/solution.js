/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (const token of tokens) {
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      const right = stack.pop();
      const left = stack.pop();

      if (token === '+') {
        stack.push(left + right);
      } else if (token === '-') {
        stack.push(left - right);
      } else if (token === '*') {
        stack.push(left * right);
      } else {
        stack.push(Math.trunc(left / right));
      }
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
};
