const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const S = input.map((line) => line.trim().split(/\s+/).map(Number));

const isStartTeam = new Array(N).fill(false);
let minDiff = Infinity;

function calculateDiff() {
  let startScore = 0;
  let linkScore = 0;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (isStartTeam[i] && isStartTeam[j]) {
        startScore += S[i][j] + S[j][i];
      } else if (!isStartTeam[i] && !isStartTeam[j]) {
        linkScore += S[i][j] + S[j][i];
      }
    }
  }

  return Math.abs(startScore - linkScore);
}

function dfs(idx, startTeamCount) {
  if (minDiff === 0) {
    return;
  }

  if (idx === N) {
    if (startTeamCount > 0 && startTeamCount < N) {
      const diff = calculateDiff();
      minDiff = Math.min(minDiff, diff);
    }

    return;
  }

  isStartTeam[idx] = true;
  dfs(idx + 1, startTeamCount + 1);

  isStartTeam[idx] = false;
  dfs(idx + 1, startTeamCount);
}

isStartTeam[0] = true;
dfs(1, 1);

console.log(minDiff);
