/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const words = s.trim().split(/\s+/);

  return words[words.length - 1].length;
};
