const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(' ');

const N = parseInt(input[0]);
const X = BigInt(input[1]);

const totalLayers = new Array(N + 1).fill(0n);
const totalPatties = new Array(N + 1).fill(0n);

totalLayers[0] = 1n;
totalPatties[0] = 1n;

for (let i = 1; i <= N; i++) {
  totalLayers[i] = 1n + totalLayers[i - 1] + 1n + totalLayers[i - 1] + 1n;
  totalPatties[i] = totalPatties[i - 1] + 1n + totalPatties[i - 1];
}

function countPattiesInLayers(level, eatenLayers) {
  if (level === 0) {
    return eatenLayers >= 1n ? 1n : 0n;
  }

  if (eatenLayers === 1n) {
    return 0n;
  }

  const firstLowerBurgerEnd = 1n + totalLayers[level - 1];
  if (eatenLayers <= firstLowerBurgerEnd) {
    return countPattiesInLayers(level - 1, eatenLayers - 1n);
  }

  const middlePattiIndex = 1n + totalLayers[level - 1] + 1n;
  if (eatenLayers === middlePattiIndex) {
    return totalPatties[level - 1] + 1n;
  }

  const secondLowerBurgerEnd = middlePattiIndex + totalLayers[level - 1];
  if (eatenLayers <= secondLowerBurgerEnd) {
    const layersInSecondBurger = eatenLayers - middlePattiIndex;
    return (
      totalPatties[level - 1] +
      1n +
      countPattiesInLayers(level - 1, layersInSecondBurger)
    );
  }

  return totalPatties[level];
}

console.log(countPattiesInLayers(N, X).toString());
