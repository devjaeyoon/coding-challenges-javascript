const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [H, M] = input[0].split(' ').map(Number);
const N = Number(input[1]);

const startPh = H * 30;
const startPm = M * 6;

let finalPh = (startPh + 6 * N) % 360;
let finalH = Math.floor(finalPh / 30);
let finalPm = 0;

let gap = (startPh - startPm + 360) % 360;
let t1 = gap / 6;

if (N < t1) {
  finalPm = (startPm + 12 * N) % 360;
} else {
  let remainingTime = N - t1;
  let meetPos = (startPh + 6 * t1) % 360;

  const cycles = Math.floor(remainingTime / 80);
  remainingTime %= 80;

  meetPos = (meetPos + 120 * cycles) % 360;

  if (remainingTime < 20) {
    finalPm = (meetPos - 12 * remainingTime) % 360;
  } else {
    meetPos = (meetPos + 6 * 20) % 360;

    const cwTime = remainingTime - 20;
    finalPm = (meetPos + 12 * cwTime) % 360;
  }
}

finalPm = (finalPm + 360) % 360;

let finalM = finalPm / 6;

console.log(`${finalH} ${finalM}`);
