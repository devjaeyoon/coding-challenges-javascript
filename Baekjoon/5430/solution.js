const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function process(commands, arr) {
  let isReversed = false;
  let start = 0;
  let end = arr.length;

  for (const cmd of commands) {
    if (cmd === 'R') {
      isReversed = !isReversed;
    }
    if (cmd === 'D') {
      if (start === end) return 'error';
      if (isReversed) end--;
      else start++;
    }
  }

  const result = arr.slice(start, end);
  if (isReversed) result.reverse();

  return '[' + result.join(',') + ']';
}

for (let i = 1; i < input.length; i += 3) {
  const commands = input[i];
  const n = Number(input[i + 1]);
  const arr = n === 0 ? [] : input[i + 2].slice(1, -1).split(',').map(Number);
  console.log(process(commands, arr));
}
