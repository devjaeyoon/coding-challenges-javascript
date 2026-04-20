const variableName = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim();

function convertVariableName(variableName) {
  if (!variableName) return 'Error!';

  const hasUnderscore = variableName.includes('_');
  const hasUpperCase = /[A-Z]/.test(variableName);

  if (hasUnderscore && hasUpperCase) return 'Error!';
  if (/^[A-Z_]/.test(variableName)) return 'Error!';
  if (variableName.endsWith('_')) return 'Error!';
  if (variableName.includes('__')) return 'Error!';

  if (hasUnderscore) {
    return variableName
      .split('_')
      .map((word, index) => {
        if (index === 0) return word;
        return word[0].toUpperCase() + word.slice(1);
      })
      .join('');
  } else {
    return variableName.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
  }
}

console.log(convertVariableName(variableName));
