const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

function generateCantorSet(n) {
  if (n === 0) {
    return '-';
  }

  const sideSegment = generateCantorSet(n - 1);
  const middleBlank = ' '.repeat(sideSegment.length);

  return sideSegment + middleBlank + sideSegment;
}

const output = input.map((line) => generateCantorSet(Number(line)));

console.log(output.join('\n'));
