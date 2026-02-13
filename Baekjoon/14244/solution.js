const [n, m] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(' ');

const hub = n - m;
let output = '';

for (let i = 1; i < n; i++) {
  if (i <= hub) {
    output += `${i - 1} ${i}\n`;
  } else {
    output += `${hub} ${i}\n`;
  }
}

console.log(output);
