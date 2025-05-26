const scores = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let prefixSums = 0;
let nearestNumber = prefixSums;

for (let i = 0; i < scores.length; i++) {
  prefixSums += scores[i];

  if (Math.abs(nearestNumber - 100) >= Math.abs(prefixSums - 100)) {
    nearestNumber = prefixSums;
  } else {
    break;
  }
}

console.log(nearestNumber);
