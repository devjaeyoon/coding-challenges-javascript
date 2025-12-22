const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(/\s+/);

const X = BigInt(input[0]);
const Y = BigInt(input[1]);
const W = BigInt(input[2]);
const S = BigInt(input[3]);

const case1 = (X + Y) * W;

const minXY = X < Y ? X : Y;
const diff = X > Y ? X - Y : Y - X;
const case2 = minXY * S + diff * W;

let case3 = 0n;
if ((X + Y) % 2n === 0n) {
  case3 = (X > Y ? X : Y) * S;
} else {
  case3 = (X > Y ? X - 1n : Y - 1n) * S + W;
}

const minTime = [case1, case2, case3].reduce((min, cur) =>
  cur < min ? cur : min
);

console.log(minTime.toString());
