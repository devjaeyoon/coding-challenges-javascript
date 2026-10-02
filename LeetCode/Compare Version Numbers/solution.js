/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const revisions1 = version1.split('.');
  const revisions2 = version2.split('.');
  const length = Math.max(revisions1.length, revisions2.length);

  for (let i = 0; i < length; i++) {
    const num1 = Number(revisions1[i] || 0);
    const num2 = Number(revisions2[i] || 0);

    if (num1 < num2) {
      return -1;
    }

    if (num1 > num2) {
      return 1;
    }
  }

  return 0;
};
