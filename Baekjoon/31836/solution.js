const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString(),
);

const A = [];
const B = [];

let start = 1;

if (N % 3 === 0) {
  start = 1;
} else if (N % 3 === 1) {
  A.push(1, 3);
  B.push(4);
  start = 5;
} else if (N % 3 === 2) {
  A.push(1);
  B.push(2);
  start = 3;
}

for (let i = start; i <= N; i += 3) {
  A.push(i, i + 1);
  B.push(i + 2);
}

console.log(A.length);
console.log(A.join(' '));
console.log(B.length);
console.log(B.join(' '));
