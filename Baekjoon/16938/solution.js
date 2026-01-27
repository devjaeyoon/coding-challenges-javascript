const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, L, R, X] = input[0].split(' ').map(Number);
const difficulties = input[1].split(' ').map(Number);
let answer = 0;

function dfs(idx, count, sum, min, max) {
  if (idx === N) {
    if (count >= 2 && sum >= L && sum <= R && max - min >= X) {
      answer++;
    }
    return;
  }

  dfs(
    idx + 1,
    count + 1,
    sum + difficulties[idx],
    Math.min(min, difficulties[idx]),
    Math.max(max, difficulties[idx]),
  );

  dfs(idx + 1, count, sum, min, max);
}

dfs(0, 0, 0, Infinity, -Infinity);

console.log(answer);
