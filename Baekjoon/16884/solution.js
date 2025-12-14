const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  if (Number(input[i]) % 2 === 0) {
    console.log('cubelover');
  } else {
    console.log('koosaga');
  }
}
