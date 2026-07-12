/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) {
    return '';
  }

  const map = new Array(128).fill(0);
  for (let i = 0; i < t.length; i++) {
    map[t.charCodeAt(i)]++;
  }

  let left = 0;
  let right = 0;
  let count = t.length;
  let minLen = Infinity;
  let minStart = 0;

  while (right < s.length) {
    const charRight = s.charCodeAt(right);

    if (map[charRight] > 0) {
      count--;
    }
    map[charRight]--;
    right++;

    while (count === 0) {
      if (right - left < minLen) {
        minLen = right - left;
        minStart = left;
      }

      const charLeft = s.charCodeAt(left);
      map[charLeft]++;

      if (map[charLeft] > 0) {
        count++;
      }
      left++;
    }
  }

  return minLen === Infinity ? '' : s.substring(minStart, minStart + minLen);
};
