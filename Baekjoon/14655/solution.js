const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const r1Coins = input.shift().split(' ').map(Number);
const r2Coins = input.shift().split(' ').map(Number);

function getAbsoluteSum(coins) {
  return coins.reduce((acc, val) => acc + Math.abs(val), 0);
}

const maxScore = getAbsoluteSum(r1Coins);
const minScore = -getAbsoluteSum(r2Coins);

console.log(maxScore - minScore);
