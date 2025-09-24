const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const requests = input.shift().split(' ').map(Number);
const M = Number(input.shift());

function findBudgetLimit(N, requests, M) {
  requests.sort((a, b) => a - b);

  const initialSum = requests.reduce((acc, cur) => acc + cur, 0);
  let left = 1;
  let right = requests[requests.length - 1];
  let answer = 0;

  if (initialSum <= M) {
    return right;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let currentSum = 0;
    requests.forEach((req) => {
      currentSum += Math.min(req, mid);
    });

    if (currentSum <= M) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

console.log(findBudgetLimit(N, requests, M));
