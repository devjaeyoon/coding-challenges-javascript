const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const sequence = input[0].split(' ').map(Number);
const lis = [];

for (const number of sequence) {
  if (lis.length === 0 || lis[lis.length - 1] < number) {
    lis.push(number);
  } else {
    let left = 0;
    let right = lis.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (lis[mid] >= number) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    lis[right] = number;
  }
}

console.log(lis.length);
