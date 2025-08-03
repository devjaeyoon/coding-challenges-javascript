const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = 1;
let prevType = '';

for (let i = 0; i < input.length; i++) {
  const current = input[i];

  if (current === 'c') {
    answer *= prevType === 'c' ? 25 : 26;
  } else if (current === 'd') {
    answer *= prevType === 'd' ? 9 : 10;
  }

  prevType = current;
}

console.log(answer);
