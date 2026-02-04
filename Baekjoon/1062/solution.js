const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input.shift().split(' ').map(Number);

function getMaxReadableWordCount(n, k, wordList) {
  if (k < 5) {
    return 0;
  }

  if (k === 26) {
    return n;
  }

  const wordMasks = wordList.map((word) => {
    let mask = 0;

    for (let i = 0; i < word.length; i++) {
      mask |= 1 << (word.charCodeAt(i) - 97);
    }

    return mask;
  });

  let learnedMask = 0;
  ['a', 'c', 'i', 'n', 't'].forEach((char) => {
    learnedMask |= 1 << (char.charCodeAt(0) - 97);
  });

  let maxCount = 0;

  function dfs(index, learnCount, currentMask) {
    if (learnCount === k - 5) {
      let readableCount = 0;

      for (let i = 0; i < n; i++) {
        if ((wordMasks[i] & currentMask) === wordMasks[i]) {
          readableCount++;
        }
      }

      maxCount = Math.max(maxCount, readableCount);

      return;
    }

    for (let i = index; i < 26; i++) {
      if ((currentMask & (1 << i)) === 0) {
        dfs(i + 1, learnCount + 1, currentMask | (1 << i));
      }
    }
  }

  dfs(0, 0, learnedMask);

  return maxCount;
}

console.log(getMaxReadableWordCount(N, K, input));
