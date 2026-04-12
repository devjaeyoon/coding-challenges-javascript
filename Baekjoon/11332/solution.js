const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const C = Number(input.shift());
const result = [];

for (let i = 0; i < C; i++) {
  const parts = input[i].trim().split(/\s+/);
  const S = parts[0];
  const N = BigInt(parts[1]);
  const T = BigInt(parts[2]);
  const L = BigInt(parts[3]);
  const limit = L * 100000000n;

  let tle = false;

  if (S === 'O(N)') {
    if (N * T > limit) {
      tle = true;
    }
  } else if (S === 'O(N^2)') {
    if (N * N * T > limit) {
      tle = true;
    }
  } else if (S === 'O(N^3)') {
    if (N * N * N * T > limit) {
      tle = true;
    }
  } else if (S === 'O(2^N)') {
    if (N >= 30n) {
      tle = true;
      a;
    } else if ((1n << N) * T > limit) {
      tle = true;
    }
  } else if (S === 'O(N!)') {
    if (N >= 13n) {
      tle = true;
    } else {
      let fact = 1n;

      for (let j = 1n; j <= N; j++) {
        fact *= j;
      }

      if (fact * T > limit) tle = true;
    }
  }

  result.push(tle ? 'TLE!' : 'May Pass.');
}

console.log(result.join('\n'));
