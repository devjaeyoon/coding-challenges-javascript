const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let hindLegsCount = 0;
let result = 0;

for (let i = 0; i < input.length; i++) {
  const pair = input[i] + input[i + 1];

  if (pair === '((') {
    hindLegsCount += 1;
  }

  if (pair === '))') {
    result += hindLegsCount;
  }
}

console.log(result);
