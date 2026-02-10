const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [length, width, height] = input[0].split(' ').map(Number);
const n = Number(input[1]);

const cubes = Array(20).fill(0);

for (let i = 2; i < 2 + n; i++) {
  const [sizeIdx, count] = input[i].split(' ').map(Number);
  cubes[sizeIdx] = count;
}

let totalCubes = 0n;
let filled = 0n;

for (let i = 19; i >= 0; i--) {
  filled *= 8n;

  const limitLength = BigInt(length >> i);
  const limitWidth = BigInt(width >> i);
  const limitHeight = BigInt(height >> i);

  const currentTotalLimit = limitLength * limitWidth * limitHeight;
  const needed = currentTotalLimit - filled;
  const have = BigInt(cubes[i]);
  const take = needed < have ? needed : have;

  filled += take;
  totalCubes += take;
}

const totalVolume = BigInt(length) * BigInt(width) * BigInt(height);

if (filled === totalVolume) {
  console.log(totalCubes.toString());
} else {
  console.log(-1);
}
