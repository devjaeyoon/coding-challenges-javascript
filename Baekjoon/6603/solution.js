const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const LOTTO_NUMBER_COUNT = 6;

function findCombinations(k, S, start, combination, result) {
  if (combination.length === LOTTO_NUMBER_COUNT) {
    result.push(combination.join(' '));

    return;
  }

  for (let i = start; i < k; i++) {
    combination.push(S[i]);

    findCombinations(k, S, i + 1, combination, result);

    combination.pop();
  }
}

function solve(k, S) {
  const result = [];
  const combination = [];

  findCombinations(k, S, 0, combination, result);

  return result.join('\n');
}

const testCases = input.slice(0, input.length - 1);

for (const testCase of testCases) {
  const [k, ...S] = testCase.split(' ').map(Number);
  const output = solve(k, S);

  if (output) {
    console.log(output);
  }

  console.log('');
}
