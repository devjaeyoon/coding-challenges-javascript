/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) {
    return '1';
  }

  let currentStr = '1';

  for (let i = 2; i <= n; i++) {
    let nextStr = '';
    let count = 1;
    let char = currentStr[0];

    for (let j = 1; j < currentStr.length; j++) {
      if (currentStr[j] === char) {
        count++;
      } else {
        nextStr += count + char;
        char = currentStr[j];
        count = 1;
      }
    }

    nextStr += count + char;
    currentStr = nextStr;
  }

  return currentStr;
};
