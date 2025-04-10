const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const output = [];

for (let i = 1; i < input.length; i++) {
  const [a, b, c] = input[i]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  const answer = a ** 2 + b ** 2 === c ** 2 ? 'yes' : 'no';

  output.push(`Scenario #${i}:\n${answer}\n`);
}

console.log(output.join('\n'));
