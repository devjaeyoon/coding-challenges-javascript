const input = require('fs')
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split('\n');

const [L, C] = input.shift().split(' ').map(Number);
const alphabets = input[0].split(' ').sort();
const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
const result = [];

function generateCombinations(start, currentPassword) {
  if (currentPassword.length === L) {
    let vowelCount = 0;
    let consonantCount = 0;

    for (const char of currentPassword) {
      if (vowels.has(char)) {
        vowelCount += 1;
      } else {
        consonantCount += 1;
      }
    }

    if (vowelCount >= 1 && consonantCount >= 2) {
      result.push(currentPassword.join(''));
    }

    return;
  }

  for (let i = start; i < C; i++) {
    currentPassword.push(alphabets[i]);
    generateCombinations(i + 1, currentPassword);
    currentPassword.pop();
  }
}

generateCombinations(0, []);

console.log(result.join('\n'));
