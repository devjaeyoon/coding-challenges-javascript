/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const result = [];
  let currentLine = [];
  let currentLength = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (currentLength + currentLine.length + word.length > maxWidth) {
      const numWords = currentLine.length;
      const spacesToFill = maxWidth - currentLength;

      if (numWords === 1) {
        result.push(currentLine[0] + ' '.repeat(spacesToFill));
      } else {
        const baseSpaces = Math.floor(spacesToFill / (numWords - 1));
        let extraSpaces = spacesToFill % (numWords - 1);

        let lineStr = '';
        for (let j = 0; j < numWords - 1; j++) {
          lineStr += currentLine[j];
          lineStr += ' '.repeat(baseSpaces + (extraSpaces > 0 ? 1 : 0));
          if (extraSpaces > 0) {
            extraSpaces--;
          }
        }
        lineStr += currentLine[numWords - 1];
        result.push(lineStr);
      }

      currentLine = [word];
      currentLength = word.length;
    } else {
      currentLine.push(word);
      currentLength += word.length;
    }
  }

  const lastLineStr = currentLine.join(' ');
  const remainingSpaces = maxWidth - lastLineStr.length;
  result.push(lastLineStr + ' '.repeat(remainingSpaces));

  return result;
};
