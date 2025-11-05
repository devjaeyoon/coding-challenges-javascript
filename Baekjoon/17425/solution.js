const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());
const cases = input.map(Number);

const MAX = 1000000;

const f = new Array(MAX + 1).fill(1);
const g = new Array(MAX + 1).fill(0);

f[0] = 0;

for (let i = 2; i <= MAX; i++) {
  for (let j = i; j <= MAX; j += i) {
    f[j] += i;
  }
}

for (let i = 1; i <= MAX; i++) {
  g[i] = g[i - 1] + f[i];
}

const answer = [];
for (const N of cases) {
  answer.push(g[N]);
}

console.log(answer.join('\n'));
