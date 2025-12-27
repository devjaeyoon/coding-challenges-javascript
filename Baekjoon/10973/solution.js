const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const permutation = input[0].split(' ').map(Number);

let i = -1;
for (let idx = N - 1; idx > 0; idx--) {
  if (permutation[idx - 1] > permutation[idx]) {
    i = idx;
    break;
  }
}

if (i === -1) {
  console.log(-1);
} else {
  let j = -1;
  for (let idx = N - 1; idx >= i; idx--) {
    if (permutation[idx] < permutation[i - 1]) {
      j = idx;
      break;
    }
  }

  let temp = permutation[i - 1];
  permutation[i - 1] = permutation[j];
  permutation[j] = temp;

  for (let left = i, right = N - 1; left < right; left++, right--) {
    temp = permutation[left];
    permutation[left] = permutation[right];
    permutation[right] = temp;
  }

  console.log(permutation.join(' '));
}
