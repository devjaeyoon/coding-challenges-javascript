const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

for (let i = 1; i <= N; i++) {
  let str = ' '.repeat(N - i) + '*'.repeat(i);

  console.log(str);
}
