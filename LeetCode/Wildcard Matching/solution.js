/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let sIdx = 0;
  let pIdx = 0;
  let starIdx = -1;
  let match = 0;

  while (sIdx < s.length) {
    if (pIdx < p.length && (p[pIdx] === '?' || s[sIdx] === p[pIdx])) {
      sIdx++;
      pIdx++;
    } else if (pIdx < p.length && p[pIdx] === '*') {
      starIdx = pIdx;
      match = sIdx;
      pIdx++;
    } else if (starIdx !== -1) {
      pIdx = starIdx + 1;
      match++;
      sIdx = match;
    } else {
      return false;
    }
  }

  while (pIdx < p.length && p[pIdx] === '*') {
    pIdx++;
  }

  return pIdx === p.length;
};
