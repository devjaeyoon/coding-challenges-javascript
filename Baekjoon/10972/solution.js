const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const permutation = input[0].split(' ').map(Number);
let i = N - 1;
while (i > 0 && permutation[i - 1] >= permutation[i]) {
  i--;
}

if (i === 0) {
  console.log(-1);
} else {
  let j = N - 1;
  while (permutation[j] <= permutation[i - 1]) {
    j--;
  }

  [permutation[i - 1], permutation[j]] = [permutation[j], permutation[i - 1]];

  const rest = permutation.slice(i);
  rest.reverse();
  const result = [...permutation.slice(0, i), ...rest];

  console.log(result.join(' '));
}
