const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const existingNumbers = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const findingNumbers = input[3].split(' ').map(Number);

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return true;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

const result = findingNumbers.map((num) =>
  binarySearch(existingNumbers, num) ? 1 : 0
);

console.log(result.join('\n'));
