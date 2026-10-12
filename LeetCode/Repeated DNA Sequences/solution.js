/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const seen = new Set();
  const result = new Set();

  for (let i = 0; i <= s.length - 10; i++) {
    const sequence = s.slice(i, i + 10);

    if (seen.has(sequence)) {
      result.add(sequence);
    } else {
      seen.add(sequence);
    }
  }

  return [...result];
};
