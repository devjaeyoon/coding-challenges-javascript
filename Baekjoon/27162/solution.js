const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function calculateScore(categoryIndex, dice) {
  const counts = new Array(7).fill(0);
  let totalSum = 0;

  for (const die of dice) {
    counts[die]++;
    totalSum += die;
  }

  switch (categoryIndex) {
    case 0:
      return counts[1] * 1;
    case 1:
      return counts[2] * 2;
    case 2:
      return counts[3] * 3;
    case 3:
      return counts[4] * 4;
    case 4:
      return counts[5] * 5;
    case 5:
      return counts[6] * 6;

    case 6: {
      for (let num = 1; num <= 6; num++) {
        if (counts[num] >= 4) {
          return num * 4;
        }
      }

      return 0;
    }

    case 7: {
      const hasThreeOfAKind = counts.includes(3);
      const hasTwoOfAKind = counts.includes(2);

      if (hasThreeOfAKind && hasTwoOfAKind) {
        return totalSum;
      }

      return 0;
    }

    case 8: {
      if (
        counts[1] === 1 &&
        counts[2] === 1 &&
        counts[3] === 1 &&
        counts[4] === 1 &&
        counts[5] === 1
      ) {
        return 30;
      }

      return 0;
    }

    case 9: {
      if (
        counts[2] === 1 &&
        counts[3] === 1 &&
        counts[4] === 1 &&
        counts[5] === 1 &&
        counts[6] === 1
      ) {
        return 30;
      }

      return 0;
    }

    case 10: {
      if (counts.includes(5)) {
        return 50;
      }

      return 0;
    }

    case 11: {
      return totalSum;
    }

    default:
      return 0;
  }
}

const availableCategories = input[0];
const fixedDice = input[1].split(' ').map(Number);

let maxScore = 0;

for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    const allDice = [...fixedDice, i, j];

    for (let k = 0; k < 12; k++) {
      if (availableCategories[k] === 'Y') {
        const currentScore = calculateScore(k, allDice);
        maxScore = Math.max(maxScore, currentScore);
      }
    }
  }
}

console.log(maxScore);
