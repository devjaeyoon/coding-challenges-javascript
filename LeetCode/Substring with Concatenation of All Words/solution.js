/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (!s || words.length === 0) {
    return [];
  }

  const wordLen = words[0].length;
  const totalWords = words.length;
  const result = [];

  const wordCount = new Map();
  for (const word of words) {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  }

  for (let i = 0; i < wordLen; i++) {
    let left = i;
    let right = i;
    let currentCount = new Map();
    let count = 0;

    while (right + wordLen <= s.length) {
      const word = s.substring(right, right + wordLen);
      right += wordLen;

      if (wordCount.has(word)) {
        currentCount.set(word, (currentCount.get(word) || 0) + 1);
        count++;

        while (currentCount.get(word) > wordCount.get(word)) {
          const leftWord = s.substring(left, left + wordLen);
          currentCount.set(leftWord, currentCount.get(leftWord) - 1);
          count--;
          left += wordLen;
        }

        if (count === totalWords) {
          result.push(left);
        }
      } else {
        currentCount.clear();
        count = 0;
        left = right;
      }
    }
  }

  return result;
};
