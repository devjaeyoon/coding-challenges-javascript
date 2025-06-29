const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function minMonkeys(vine) {
  if (vine.trim() === '') {
    return 1;
  }

  function parse(vine, start, end) {
    if (end - start === 2) {
      return 2;
    }

    let depth = 0;

    for (let i = start + 1; i < end - 1; i++) {
      if (vine[i] === '[') {
        depth += 1;
      } else if (vine[i] === ']') {
        depth -= 1;
      } else {
        continue;
      }

      if (depth === 0) {
        const left = parse(vine, start + 1, i + 1);
        const right = parse(vine, i + 1, end - 1);

        return 2 * Math.max(left, right);
      }
    }

    return 2;
  }

  return parse(vine, 0, vine.length);
}

const T = parseInt(input[0], 10);

for (let i = 1; i <= T; i++) {
  console.log(minMonkeys(input[i]));
}
