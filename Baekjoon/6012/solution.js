const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString(),
);

const stack = [[1, N]];
let sum = 0;

while (stack.length > 0) {
  const [start, end] = stack.pop();

  if (start === end) {
    continue;
  } else if (start + 1 === end) {
    sum += start * end;
  } else {
    const mid = Math.floor((start + end) / 2);

    stack.push([start, mid]);
    stack.push([mid + 1, end]);
  }
}

console.log(sum);
