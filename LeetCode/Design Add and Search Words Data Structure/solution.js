var WordDictionary = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;

  for (const char of word) {
    if (!node[char]) {
      node[char] = {};
    }

    node = node[char];
  }

  node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const dfs = function (node, index) {
    if (index === word.length) {
      return node.isEnd === true;
    }

    const char = word[index];

    if (char === '.') {
      for (const key of Object.keys(node)) {
        if (key !== 'isEnd' && dfs(node[key], index + 1)) {
          return true;
        }
      }

      return false;
    }

    if (!node[char]) {
      return false;
    }

    return dfs(node[char], index + 1);
  };

  return dfs(this.root, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
