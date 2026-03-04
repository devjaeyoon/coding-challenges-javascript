const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString(),
);

const maxCount = (N * (N - 1)) / 2;
const maxArr = [];
for (let i = 0; i < N; i++) {
  maxArr.push(2 ** i);
}

const minCount = N - 1;
const minArr = [];
for (let i = 1; i <= N; i++) {
  minArr.push(i);
}

console.log(maxCount);
console.log(maxArr.join(' '));
console.log(minCount);
console.log(minArr.join(' '));
