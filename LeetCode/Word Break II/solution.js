/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const memo = new Map();

  const dfs = (start) => {
    if (start === s.length) {
      return [''];
    }

    if (memo.has(start)) {
      return memo.get(start);
    }

    const result = [];

    for (let end = start + 1; end <= s.length; end++) {
      const word = s.slice(start, end);

      if (!wordSet.has(word)) {
        continue;
      }

      const sentences = dfs(end);

      for (const sentence of sentences) {
        result.push(sentence ? word + ' ' + sentence : word);
      }
    }

    memo.set(start, result);

    return result;
  };

  return dfs(0);
};
