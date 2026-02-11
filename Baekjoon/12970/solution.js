const [N, K] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let found = false;

for (let a = 0; a <= N; a++) {
  const b = N - a;

  if (a * b >= K) {
    let result = new Array(N).fill('B');

    for (let i = 0; i < a - 1; i++) {
      result[i] = 'A';
    }

    if (a > 0) {
      const currentK = (a - 1) * b;
      const remainingK = K - currentK;
      result[N - 1 - remainingK] = 'A';
    } else if (K > 0) {
      continue;
    }

    console.log(result.join(''));
    found = true;
    break;
  }
}

if (!found) {
  console.log(-1);
}
