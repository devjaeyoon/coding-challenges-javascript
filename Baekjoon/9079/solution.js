const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(/\s+/);

const T = Number(input.shift());
const output = [];

const flips = [7, 56, 448, 73, 146, 292, 273, 84];

function bfs(startState) {
  if (startState === 0 || startState === 511) {
    return 0;
  }

  const visited = new Array(512).fill(false);
  visited[startState] = true;

  const queue = [[startState, 0]];
  let head = 0;

  while (head < queue.length) {
    const [currState, count] = queue[head++];

    for (const flip of flips) {
      const nextState = currState ^ flip;

      if (nextState === 0 || nextState === 511) {
        return count + 1;
      }

      if (!visited[nextState]) {
        visited[nextState] = true;
        queue.push([nextState, count + 1]);
      }
    }
  }

  return -1;
}

for (let t = 0; t < T; t++) {
  let startState = 0;

  for (let i = 0; i < 9; i++) {
    if (input.shift() === 'H') {
      startState |= 1 << i;
    }
  }

  output.push(bfs(startState));
}

console.log(output.join('\n'));
