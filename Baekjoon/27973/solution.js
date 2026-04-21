const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const Q = Number(input[0]);

let start = 1n;
let M = 1n;
let A = 0n;

const result = [];

for (let i = 1; i <= Q; i++) {
  const line = input[i].split(' ');
  const cmd = line[0];

  if (cmd === '0') {
    const x = BigInt(line[1]);
    A += x;
  } else if (cmd === '1') {
    const x = BigInt(line[1]);
    M *= x;
    A *= x;
  } else if (cmd === '2') {
    const n = BigInt(line[1]);
    start += n;
  } else if (cmd === '3') {
    const currentMin = start * M + A;
    result.push(currentMin.toString());
  }
}

console.log(result.join('\n'));
