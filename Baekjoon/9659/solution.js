const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString()
    .trim()
    .split('\n')
);

if (N % 2 === 1) {
  console.log('SK');
} else {
  console.log('CY');
}
