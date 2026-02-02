const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString()
    .trim(),
);

let result = '';

function drawStars(i, j, num) {
  if (Math.floor(i / num) % 3 === 1 && Math.floor(j / num) % 3 === 1) {
    result += ' ';
  } else {
    if (num === 1) {
      result += '*';
    } else {
      drawStars(i, j, Math.floor(num / 3));
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    drawStars(i, j, Math.floor(N / 3));
  }
  result += '\n';
}

console.log(result);
