const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());

const getGCD = (a, b) => (b === 0n ? a : getGCD(b, a % b));

for (let i = 0; i < T; i++) {
  const decimalStr = input[i].trim();

  const pointIndex = decimalStr.indexOf('.');
  const afterPoint = decimalStr.substring(pointIndex + 1);

  let numerator = 0n;
  let denominator = 0n;

  if (afterPoint.includes('(')) {
    const openParenIndex = afterPoint.indexOf('(');

    const nonRep = afterPoint.substring(0, openParenIndex);
    const rep = afterPoint.substring(openParenIndex + 1, afterPoint.length - 1);

    const allNumStr = nonRep + rep;
    const allNum = BigInt(allNumStr);
    const nonRepNum = nonRep === '' ? 0n : BigInt(nonRep);

    numerator = allNum - nonRepNum;

    const nines = '9'.repeat(rep.length);
    const zeros = '0'.repeat(nonRep.length);
    denominator = BigInt(nines + zeros);
  } else {
    numerator = BigInt(afterPoint);
    denominator = BigInt('1' + '0'.repeat(afterPoint.length));
  }

  const gcd = getGCD(numerator, denominator);

  console.log(`${numerator / gcd}/${denominator / gcd}`);
}
