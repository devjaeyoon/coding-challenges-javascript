const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const setA = input[1].split(' ').map(Number);
const arrayB = input[2].split(' ').map(Number);
const setB = new Set(arrayB);

const difference = [];

for (const element of setA) {
  if (!setB.has(element)) {
    difference.push(element);
  }
}

difference.sort((a, b) => a - b);

if (difference.length === 0) {
  console.log(0);
} else {
  console.log(difference.length);
  console.log(difference.join(' '));
}
