/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  const memo = new Map();

  const check = (s1, s2) => {
    if (s1 === s2) {
      return true;
    }

    const key = s1 + '#' + s2;
    if (memo.has(key)) {
      return memo.get(key);
    }

    const count = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
      count[s1.charCodeAt(i) - 97]++;
      count[s2.charCodeAt(i) - 97]--;
    }

    if (count.some((c) => c !== 0)) {
      memo.set(key, false);

      return false;
    }

    const n = s1.length;
    for (let i = 1; i < n; i++) {
      const keepOrder =
        check(s1.slice(0, i), s2.slice(0, i)) &&
        check(s1.slice(i), s2.slice(i));

      if (keepOrder) {
        memo.set(key, true);

        return true;
      }

      const swapOrder =
        check(s1.slice(0, i), s2.slice(n - i)) &&
        check(s1.slice(i), s2.slice(0, n - i));

      if (swapOrder) {
        memo.set(key, true);

        return true;
      }
    }

    memo.set(key, false);

    return false;
  };

  return check(s1, s2);
};
