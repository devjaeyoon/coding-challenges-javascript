const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const guitars = [];

for (let i = 0; i < N; i++) {
  const [name, info] = input[i].trim().split(' ');

  const binaryStr = info.replace(/Y/g, '1').replace(/N/g, '0');

  const mask = BigInt('0b' + binaryStr);
  guitars.push(mask);
}

let maxSongs = 0;
let minGuitars = Infinity;

function countBits(n) {
  let count = 0;

  while (n > 0n) {
    if ((n & 1n) === 1n) count++;
    n >>= 1n;
  }

  return count;
}

const totalCombinations = 1 << N;

for (let i = 1; i < totalCombinations; i++) {
  let currentMask = 0n;
  let guitarCount = 0;

  for (let j = 0; j < N; j++) {
    if ((i & (1 << j)) !== 0) {
      currentMask |= guitars[j];
      guitarCount++;
    }
  }

  const songCount = countBits(currentMask);

  if (songCount > maxSongs) {
    maxSongs = songCount;
    minGuitars = guitarCount;
  } else if (songCount === maxSongs && songCount > 0) {
    if (guitarCount < minGuitars) {
      minGuitars = guitarCount;
    }
  }
}

if (maxSongs === 0) {
  console.log(-1);
} else {
  console.log(minGuitars);
}
