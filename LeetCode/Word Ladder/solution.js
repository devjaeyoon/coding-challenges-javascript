/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);

  if (!wordSet.has(endWord)) {
    return 0;
  }

  let queue = [beginWord];
  let length = 1;

  while (queue.length > 0) {
    const nextQueue = [];

    for (const word of queue) {
      if (word === endWord) {
        return length;
      }

      for (let i = 0; i < word.length; i++) {
        for (let code = 97; code <= 122; code++) {
          const char = String.fromCharCode(code);

          if (char === word[i]) {
            continue;
          }

          const nextWord = word.slice(0, i) + char + word.slice(i + 1);

          if (!wordSet.has(nextWord)) {
            continue;
          }

          nextQueue.push(nextWord);
          wordSet.delete(nextWord);
        }
      }
    }

    queue = nextQueue;
    length++;
  }

  return 0;
};
