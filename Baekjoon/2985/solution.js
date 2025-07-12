const [num1, num2, num3] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(num1, num2, num3) {
  if (num1 + num2 === num3) {
    return `${num1}+${num2}=${num3}`;
  }
  if (num2 + num3 === num1) {
    return `${num1}=${num2}+${num3}`;
  }
  if (num1 - num2 === num3) {
    return `${num1}-${num2}=${num3}`;
  }
  if (num2 - num3 === num1) {
    return `${num1}=${num2}-${num3}`;
  }
  if (num1 * num2 === num3) {
    return `${num1}*${num2}=${num3}`;
  }
  if (num2 * num3 === num1) {
    return `${num1}=${num2}*${num3}`;
  }
  if (num1 / num2 === num3) {
    return `${num1}/${num2}=${num3}`;
  }
  if (num2 / num3 === num1) {
    return `${num1}=${num2}/${num3}`;
  }
}

console.log(solution(num1, num2, num3));
