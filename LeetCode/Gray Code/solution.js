/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const result = [];
  const sequenceLength = 1 << n;

  for (let i = 0; i < sequenceLength; i++) {
    result.push(i ^ (i >> 1));
  }

  return result;
};
