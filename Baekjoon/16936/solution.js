const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const sequence = input[1].split(' ').map(BigInt);

function countThree(num) {
  let count = 0n;

  while (num > 0n && num % 3n === 0n) {
    count++;
    num /= 3n;
  }

  return count;
}

sequence.sort((a, b) => {
  const countA = countThree(a);
  const countB = countThree(b);

  if (countA !== countB) {
    return countA < countB ? 1 : -1;
  } else {
    return a > b ? 1 : a < b ? -1 : 0;
  }
});

console.log(sequence.join(' '));
