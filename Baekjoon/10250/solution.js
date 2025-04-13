const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i < input.length; i++) {
  const [H, W, N] = input[i].split(' ').map(Number);

  const floor = N % H === 0 ? H : N % H;
  const room = Math.ceil(N / H);

  console.log(`${floor}${room.toString().padStart(2, '0')}`);
}
