const N = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim();

const nLength = N.length;
const uniquePaths = new Set();

function dfs(left, right, path) {
  const currentSubstring = N.substring(left, right + 1);
  const newPath = [...path, currentSubstring];

  if (left === 0 && right === nLength - 1) {
    uniquePaths.add(newPath.join(','));
    return;
  }

  if (left > 0) {
    dfs(left - 1, right, newPath);
  }

  if (right < nLength - 1) {
    dfs(left, right + 1, newPath);
  }
}

for (let i = 0; i < nLength; i++) {
  dfs(i, i, []);
}

console.log(uniquePaths.size);
