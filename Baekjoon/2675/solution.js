const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [R, S] = input[i].split(' ');
  let result = '';

  for (const str of S) {
    result += str.repeat(Number(R));
  }

  console.log(result);
}
