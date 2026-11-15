/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];
  let num = 0;
  let operator = '+';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char >= '0' && char <= '9') {
      num = num * 10 + Number(char);
    }

    if ((char !== ' ' && (char < '0' || char > '9')) || i === s.length - 1) {
      if (operator === '+') {
        stack.push(num);
      } else if (operator === '-') {
        stack.push(-num);
      } else if (operator === '*') {
        stack.push(stack.pop() * num);
      } else if (operator === '/') {
        stack.push(Math.trunc(stack.pop() / num));
      }

      operator = char;
      num = 0;
    }
  }

  return stack.reduce((sum, value) => sum + value, 0);
};
