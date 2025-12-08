const [N, M] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

if (N % 2 === 0 || M % 2 === 0) {
  console.log('A');
} else {
  console.log('B');
}
