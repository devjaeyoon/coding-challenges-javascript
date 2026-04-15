const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());

function getNextPermutation(arr) {
  let i = arr.length - 1;

  while (i > 0 && arr[i - 1] >= arr[i]) {
    i--;
  }

  if (i === 0) {
    return false;
  }

  let j = arr.length - 1;
  while (arr[j] <= arr[i - 1]) {
    j--;
  }

  let temp = arr[i - 1];
  arr[i - 1] = arr[j];
  arr[j] = temp;

  let left = i;
  let right = arr.length - 1;
  while (left < right) {
    temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return true;
}

const result = [];

for (let i = 0; i < T; i++) {
  const word = input[i].trim();
  const charArray = word.split('');

  if (getNextPermutation(charArray)) {
    result.push(charArray.join(''));
  } else {
    result.push(word);
  }
}

console.log(result.join('\n'));
