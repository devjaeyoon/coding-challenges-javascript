const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const padded = input.padStart(Math.ceil(input.length / 3) * 3, '0');

let result = '';
for (let i = 0; i < padded.length; i += 3) {
  const binGroup = padded.slice(i, i + 3);
  const octDigit = parseInt(binGroup, 2);

  result += octDigit.toString();
}

console.log(result);
