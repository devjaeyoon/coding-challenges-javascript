/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }

  const digitToLetters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const result = [];

  function backtrack(index, currentCombination) {
    if (index === digits.length) {
      result.push(currentCombination);
      return;
    }

    const currentDigit = digits[index];
    const letters = digitToLetters[currentDigit];

    for (let i = 0; i < letters.length; i++) {
      backtrack(index + 1, currentCombination + letters[i]);
    }
  }

  backtrack(0, '');

  return result;
};
