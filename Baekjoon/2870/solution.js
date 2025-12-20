const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const result = [];

for (let i = 0; i < N; i++) {
  const line = input[i];
  const numbers = line.split(/[a-z]/).filter((v) => v !== '');

  numbers.forEach((num) => {
    result.push(BigInt(num));
  });
}

result.sort((a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
});

console.log(result.map((v) => v.toString()).join('\n'));
