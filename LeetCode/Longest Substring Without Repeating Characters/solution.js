/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let left = 0;
  let charMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];

    if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
      left = charMap.get(currentChar) + 1;
    }

    charMap.set(currentChar, i);
    maxLength = Math.max(maxLength, i - left + 1);
  }

  return maxLength;
};
