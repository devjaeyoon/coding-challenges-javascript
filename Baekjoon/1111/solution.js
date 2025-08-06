const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

function solution(N, numbers) {
  if (N === 1) {
    console.log('A');
  } else if (N === 2) {
    if (numbers[0] === numbers[1]) {
      console.log(numbers[0]);
    } else {
      console.log('A');
    }
  } else {
    const aDenominator = numbers[1] - numbers[0];
    const aNumerator = numbers[2] - numbers[1];

    if (aDenominator === 0) {
      if (aNumerator !== 0) {
        console.log('B');
        return;
      }

      const isSame = numbers.every((v) => v === numbers[0]);
      console.log(isSame ? numbers[0] : 'B');
      return;
    }

    const a = aNumerator / aDenominator;

    if (!Number.isInteger(a)) {
      console.log('B');
      return;
    }

    const b = numbers[1] - numbers[0] * a;
    let isValid = true;

    for (let i = 0; i < N - 1; i++) {
      if (numbers[i] * a + b !== numbers[i + 1]) {
        isValid = false;
        break;
      }
    }

    if (!isValid) {
      console.log('B');
    } else {
      console.log(numbers[N - 1] * a + b);
    }
  }
}

solution(N, numbers);
