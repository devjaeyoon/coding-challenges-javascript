/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);

  if (!wordSet.has(endWord)) {
    return [];
  }

  const parents = new Map();
  const distance = new Map();

  distance.set(beginWord, 0);

  let queue = [beginWord];
  let found = false;

  while (queue.length > 0 && !found) {
    const nextQueue = [];
    const currentLevel = new Set();

    for (const word of queue) {
      const currentDistance = distance.get(word);

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

          if (!distance.has(nextWord)) {
            distance.set(nextWord, currentDistance + 1);
            parents.set(nextWord, [word]);
            nextQueue.push(nextWord);

            if (nextWord === endWord) {
              found = true;
            }
          } else if (distance.get(nextWord) === currentDistance + 1) {
            parents.get(nextWord).push(word);
          }

          currentLevel.add(nextWord);
        }
      }
    }

    for (const word of currentLevel) {
      wordSet.delete(word);
    }

    queue = nextQueue;
  }

  if (!distance.has(endWord)) {
    return [];
  }

  const result = [];
  const path = [endWord];

  const backtrack = (word) => {
    if (word === beginWord) {
      result.push([...path].reverse());

      return;
    }

    for (const parent of parents.get(word)) {
      path.push(parent);
      backtrack(parent);
      path.pop();
    }
  };

  backtrack(endWord);

  return result;
};
