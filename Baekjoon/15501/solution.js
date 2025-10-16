const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input.shift());
const initialSequence = input[0].split(' ');
const targetSequence = input[1].split(' ');

function isCyclicShift(source, target) {
  const sourceStr = source.join(',');
  const targetStr = target.join(',');

  if (source.length <= 1) {
    return true;
  }

  const doubledSourceStr = sourceStr + ',' + sourceStr;

  return doubledSourceStr.includes(targetStr);
}

const isGoodForward = isCyclicShift(initialSequence, targetSequence);

const reversedInitialSeq = [...initialSequence].reverse();
const isGoodBackward = isCyclicShift(reversedInitialSeq, targetSequence);

if (isGoodForward || isGoodBackward) {
  console.log('good puzzle');
} else {
  console.log('bad puzzle');
}
