/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = [];

  if (s.length < 4 || s.length > 12) {
    return result;
  }

  function backtrack(index, currentPath) {
    if (currentPath.length === 4) {
      if (index === s.length) {
        result.push(currentPath.join('.'));
      }
      return;
    }

    for (let length = 1; length <= 3; length++) {
      if (index + length > s.length) {
        break;
      }

      const segment = s.substring(index, index + length);

      if (segment.length > 1 && segment[0] === '0') {
        continue;
      }

      if (parseInt(segment, 10) > 255) {
        continue;
      }

      currentPath.push(segment);
      backtrack(index + length, currentPath);
      currentPath.pop();
    }
  }

  backtrack(0, []);

  return result;
};
