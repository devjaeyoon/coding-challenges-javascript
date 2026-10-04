/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  if (numerator === 0) {
    return '0';
  }

  const isNegative = numerator < 0 !== denominator < 0;

  let num = Math.abs(numerator);
  let den = Math.abs(denominator);

  let result = isNegative ? '-' : '';

  result += Math.floor(num / den);

  let remainder = num % den;

  if (remainder === 0) {
    return result;
  }

  result += '.';

  const remainderMap = new Map();
  const decimal = [];

  while (remainder !== 0) {
    if (remainderMap.has(remainder)) {
      const repeatIndex = remainderMap.get(remainder);
      decimal.splice(repeatIndex, 0, '(');
      decimal.push(')');
      break;
    }

    remainderMap.set(remainder, decimal.length);

    remainder *= 10;

    decimal.push(Math.floor(remainder / den));
    remainder %= den;
  }

  return result + decimal.join('');
};
