const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function calculateTotalCombinations(animalCount, animalAnswers) {
  const answerFrequencies = new Array(animalCount).fill(0);

  for (const ans of animalAnswers) {
    if (ans >= animalCount) {
      return 0;
    }

    answerFrequencies[ans]++;
  }

  let totalCombinations = 0;

  for (let rabbitCount = 0; rabbitCount <= animalCount; rabbitCount++) {
    const catCount = animalCount - rabbitCount;
    const expectedAnswerFrequencies = new Array(animalCount).fill(0);

    for (let i = 0; i < rabbitCount; i++) {
      expectedAnswerFrequencies[i]++;
    }
    for (let i = 0; i < catCount; i++) {
      expectedAnswerFrequencies[i]++;
    }

    let isMatch = true;
    for (let i = 0; i < animalCount; i++) {
      if (answerFrequencies[i] !== expectedAnswerFrequencies[i]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) {
      let waysForThisPartition = 1;

      for (let i = 0; i < N; i++) {
        if (expectedAnswerFrequencies[i] === 2) {
          waysForThisPartition *= 2;
        }
      }
      totalCombinations += waysForThisPartition;
    }
  }

  return totalCombinations;
}

const N = Number(input.shift());
const answers = input[0].split(' ').map(Number);

console.log(calculateTotalCombinations(N, answers));
