/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramMap = new Map();

  for (const str of strs) {
    const sortedKey = str.split('').sort().join('');

    if (!anagramMap.has(sortedKey)) {
      anagramMap.set(sortedKey, []);
    }

    anagramMap.get(sortedKey).push(str);
  }

  return Array.from(anagramMap.values());
};
