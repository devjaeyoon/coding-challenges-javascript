const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString(),
);

if (N === 1) {
  console.log('YES');
  console.log('1');
} else if (N === 2) {
  console.log('NO');
} else {
  const answer = [1, 3, 2];

  for (let i = 4; i <= N; i++) {
    answer.push(i);
  }

  console.log('YES');
  console.log(answer.join(' '));
}
