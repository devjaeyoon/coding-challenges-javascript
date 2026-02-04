const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString(),
);

let totalLength = 3;
let level = 0;

while (totalLength < N) {
  level++;
  totalLength = totalLength * 2 + (level + 3);
}

function findMooCharacter(targetIndex, currentLevel, currentTotalLength) {
  const middleLength = currentLevel + 3;
  const sideLength = (currentTotalLength - middleLength) / 2;

  if (targetIndex <= sideLength) {
    return findMooCharacter(targetIndex, currentLevel - 1, sideLength);
  } else if (targetIndex > sideLength + middleLength) {
    return findMooCharacter(
      targetIndex - (sideLength + middleLength),
      currentLevel - 1,
      sideLength,
    );
  } else {
    if (targetIndex - sideLength === 1) {
      return 'm';
    } else {
      return 'o';
    }
  }
}

console.log(findMooCharacter(N, level, totalLength));
