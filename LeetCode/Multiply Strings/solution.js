/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  const num1Length = num1.length;
  const num2Length = num2.length;

  const resultArray = new Array(num1Length + num2Length).fill(0);

  for (let i = num1Length - 1; i >= 0; i--) {
    for (let j = num2Length - 1; j >= 0; j--) {
      const digit1 = num1[i] - '0';
      const digit2 = num2[j] - '0';
      const product = digit1 * digit2;

      const currentIndex = i + j + 1;
      const carryIndex = i + j;

      const sum = product + resultArray[currentIndex];

      resultArray[currentIndex] = sum % 10;
      resultArray[carryIndex] += Math.floor(sum / 10);
    }
  }

  let startIndex = 0;
  while (startIndex < resultArray.length && resultArray[startIndex] === 0) {
    startIndex++;
  }

  return resultArray.slice(startIndex).join('');
};
