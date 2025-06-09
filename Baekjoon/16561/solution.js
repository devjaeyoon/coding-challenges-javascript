const n = Number(require('fs').readFileSync('/dev/stdin').toString());
let count = 0;

for (let a = 3; a <= n; a += 3) {
  for (let b = 3; b <= n; b += 3) {
    for (let c = 3; c <= n; c += 3) {
      if (a + b + c === n) {
        count += 1;
      }
    }
  }
}

console.log(count);
