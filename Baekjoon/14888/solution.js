const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const numbers = input.shift().split(' ').map(Number);
const operatorCounts = input.shift().split(' ').map(Number);

let maxResult = -Infinity;
let minResult = Infinity;

function dfs(index, currentResult, add, sub, mul, div) {
  if (index === N) {
    maxResult = Math.max(maxResult, currentResult);
    minResult = Math.min(minResult, currentResult);

    return;
  }

  const nextNum = numbers[index];

  if (add > 0) {
    dfs(index + 1, currentResult + nextNum, add - 1, sub, mul, div);
  }

  if (sub > 0) {
    dfs(index + 1, currentResult - nextNum, add, sub - 1, mul, div);
  }

  if (mul > 0) {
    dfs(index + 1, currentResult * nextNum, add, sub, mul - 1, div);
  }

  if (div > 0) {
    const nextResult = Math.trunc(currentResult / nextNum);
    dfs(index + 1, nextResult, add, sub, mul, div - 1);
  }
}

dfs(
  1,
  numbers[0],
  operatorCounts[0],
  operatorCounts[1],
  operatorCounts[2],
  operatorCounts[3]
);

console.log(maxResult === 0 ? 0 : maxResult);
console.log(minResult === 0 ? 0 : minResult);
