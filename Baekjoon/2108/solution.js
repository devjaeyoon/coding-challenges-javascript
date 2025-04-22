const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const n = input.shift();
const sortedInput = input.sort((a, b) => a - b);

const average = Math.round(sortedInput.reduce((acc, cur) => acc + cur, 0) / n);
const median = sortedInput[Math.floor(n / 2)];

function getMode(numArr) {
  const numbersCount = {};

  for (const num of numArr) {
    if (numbersCount.hasOwnProperty(num)) {
      numbersCount[num]++;
    } else {
      numbersCount[num] = 0;
    }
  }

  const maxCount = Math.max(...Object.values(numbersCount));

  const modeNumbers = [];

  for (const key of Object.keys(numbersCount)) {
    if (numbersCount[key] === maxCount) {
      modeNumbers.push(key);
    }
  }

  modeNumbers.sort((a, b) => a - b);

  return modeNumbers.length > 1 ? modeNumbers[1] : modeNumbers[0];
}

const mode = getMode(sortedInput);
const range = sortedInput[n - 1] - sortedInput[0];

const output = [average, median, mode, range];

console.log(output.join('\n'));
