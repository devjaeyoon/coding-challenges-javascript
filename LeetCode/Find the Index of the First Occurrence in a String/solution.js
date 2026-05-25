/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const n = haystack.length;
  const m = needle.length;

  for (let i = 0; i <= n - m; i++) {
    let isMatch = true;

    for (let j = 0; j < m; j++) {
      if (haystack[i + j] !== needle[j]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) {
      return i;
    }
  }

  return -1;
};
