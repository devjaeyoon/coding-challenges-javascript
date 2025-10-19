const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const injuredFingerNumber = BigInt(input[0]);
const maxUses = BigInt(input[1]);

let result = 0n;

if (injuredFingerNumber === 1n) {
  result = maxUses * 8n;
} else if (injuredFingerNumber === 5n) {
  result = maxUses * 8n + 4n;
} else {
  if (maxUses % 2n === 0n) {
    result = (maxUses / 2n) * 8n + (injuredFingerNumber - 1n);
  } else {
    result = (maxUses / 2n) * 8n + (9n - injuredFingerNumber);
  }
}

console.log(result.toString());
