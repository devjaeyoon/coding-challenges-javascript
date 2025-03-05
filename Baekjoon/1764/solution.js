const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const neverHeards = new Set();
const neverSeens = new Set();

for (let i = 1; i <= N; i++) {
  neverHeards.add(input[i]);
}

for (let i = N + 1; i <= N + M; i++) {
  neverSeens.add(input[i]);
}

const neverHeardsAndSeens = [];

neverHeards.forEach((person) => {
  if (neverSeens.has(person)) {
    neverHeardsAndSeens.push(person);
  }
});

neverHeardsAndSeens.sort();

console.log(neverHeardsAndSeens.length);
console.log(neverHeardsAndSeens.join('\n'));
