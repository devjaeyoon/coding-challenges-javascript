const input = require('fs')
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const command = input[0].split(' ');
const problemType = Number(command[0]);

const factorial = Array(21).fill(1n);
for (let i = 2; i <= 20; i++) {
  factorial[i] = factorial[i - 1] * BigInt(i);
}

const numbers = Array.from({ length: N }, (_, i) => i + 1);

if (problemType === 1) {
  const result = [];
  let k = BigInt(command[1]);

  k--;

  for (let i = N; i > 0; i--) {
    const remainingFactorial = factorial[i - 1];
    const index = Number(k / remainingFactorial);

    result.push(numbers[index]);
    numbers.splice(index, 1);

    k %= remainingFactorial;
  }

  console.log(result.join(' '));
} else {
  const permutation = command.slice(1).map(Number);
  let order = 0n;

  for (let i = 0; i < N; i++) {
    const currentNum = permutation[i];
    const indexInAvailable = numbers.indexOf(currentNum);
    const remainingFactorial = factorial[N - 1 - i];

    order += BigInt(indexInAvailable) * remainingFactorial;

    numbers.splice(indexInAvailable, 1);
  }

  console.log((order + 1n).toString());
}
