const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(difficultyLevels) {
  const n = difficultyLevels.length;

  if (n === 0) {
    return 0;
  }

  const truncatedMean = Math.round(n * 0.15);
  const processedDifficultyLevles = difficultyLevels
    .sort((a, b) => a - b)
    .slice(truncatedMean, n - truncatedMean);

  if (processedDifficultyLevles.length === 0) {
    return 0;
  }

  return Math.round(
    processedDifficultyLevles.reduce((acc, cur) => acc + cur, 0) /
      processedDifficultyLevles.length
  );
}

console.log(solution(input.slice(1)));
