const S = require('fs').readFileSync('/dev/stdin').toString().trim();

const alphabetPositions = new Array(26).fill(-1);

for (let i = 0; i < S.length; i++) {
  const alphabetIndex = S[i].charCodeAt() - 97;

  if (alphabetPositions[alphabetIndex] === -1) {
    alphabetPositions[alphabetIndex] = i;
  }
}

console.log(alphabetPositions.join(' '));
