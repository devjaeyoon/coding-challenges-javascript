const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numToName = new Map();
const nameToNum = new Map();

for (let i = 1; i <= N; i++) {
  numToName.set(i, input[i]);
  nameToNum.set(input[i], i);
}

for (let i = N + 1; i <= N + M; i++) {
  if (Number.isNaN(Number(input[i]))) {
    console.log(nameToNum.get(input[i]));
  } else {
    console.log(numToName.get(Number(input[i])));
  }
}
