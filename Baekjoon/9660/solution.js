const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString();
const N = Number(input);

if (N % 7 === 0 || N % 7 === 2) {
  console.log('CY');
} else {
  console.log('SK');
}
