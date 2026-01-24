const K = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString(),
);

let size = 1;
while (size < K) {
  size *= 2;
}

let count = 0;
let tempSize = size;

while (K > 0) {
  if (K % tempSize === 0) {
    break;
  }
  tempSize /= 2;
  count++;
}

console.log(`${size} ${count}`);
