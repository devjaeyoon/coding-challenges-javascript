const N = Number(require('fs').readFileSync('/dev/stdin').toString());

const numbers = [0, 666, 1666, 2666, 3666, 4666, 5666];
let start = 5667;

while (numbers.length !== 10001) {
  if (String(start).includes(666)) {
    numbers.push(start);
  }
  start += 1;
}

console.log(numbers[N]);
