const [N, K] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function josephus(n, k) {
  const aliveStatuses = new Array(n).fill(true);
  const deathOrders = [];
  let deadPersonCount = 0;
  let deathOrder = 0;
  let i = 0;

  while (i < n) {
    if (aliveStatuses[i]) {
      deathOrder += 1;
      if (deathOrder === k) {
        deathOrders.push(i + 1);
        deadPersonCount += 1;
        aliveStatuses[i] = false;
        deathOrder = 0;
        if (deadPersonCount === n) {
          break;
        }
      }
    }
    if (i === n - 1) {
      i = 0;
      continue;
    }
    i++;
  }

  return `<${deathOrders.join(', ')}>`;
}

console.log(josephus(N, K));
