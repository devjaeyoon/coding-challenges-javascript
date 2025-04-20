const input = Number(require('fs').readFileSync('/dev/stdin').toString());

function countTrailingZeros(num) {
  let count = 0;

  for (let i = 5; i <= num; i *= 5) {
    count += Math.floor(num / i);
  }

  return count;
}

console.log(countTrailingZeros(input));
