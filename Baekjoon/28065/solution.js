const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString(),
);

const result = [];
let start = 1;
let end = N;

while (start <= end) {
  result.push(start);
  start++;

  if (start > end) {
    break;
  }

  result.push(end);
  end--;
}

console.log(result.join(' '));
