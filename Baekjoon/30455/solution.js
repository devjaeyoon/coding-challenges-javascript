const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString(),
);

if (N % 2 === 0) {
  console.log('Duck');
} else {
  console.log('Goose');
}
