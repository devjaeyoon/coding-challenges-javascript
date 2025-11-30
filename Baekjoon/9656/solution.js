const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString()
    .trim()
    .split('\n')
);

if (N % 2 === 1) {
  console.log('CY');
} else {
  console.log('SK');
}
