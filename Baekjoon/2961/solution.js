const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const ingredients = input.map((v) => v.split(' ').map(Number));

let minDiff = Infinity;

function dfs(idx, sour, bitter, useCnt) {
  if (idx === N) {
    if (useCnt > 0) {
      const currentDiff = Math.abs(sour - bitter);
      minDiff = Math.min(minDiff, currentDiff);
    }

    return;
  }

  dfs(
    idx + 1,
    sour * ingredients[idx][0],
    bitter + ingredients[idx][1],
    useCnt + 1,
  );

  dfs(idx + 1, sour, bitter, useCnt);
}

dfs(0, 1, 0, 0);

console.log(minDiff);
