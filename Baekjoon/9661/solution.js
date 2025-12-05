const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString();
const N = Number(input);

if (N % 5 === 0 || N % 5 === 2) {
  console.log('CY');
} else {
  console.log('SK');
}
