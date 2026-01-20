const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString(),
);

const values = [1, 5, 10, 50];
const uniqueSums = new Set();

function dfs(cnt, idx, sum) {
  if (cnt === N) {
    uniqueSums.add(sum);
    return;
  }

  for (let i = idx; i < 4; i++) {
    dfs(cnt + 1, i, sum + values[i]);
  }
}

dfs(0, 0, 0);

console.log(uniqueSums.size);
