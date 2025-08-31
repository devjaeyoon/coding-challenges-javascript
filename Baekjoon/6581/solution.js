const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const words = input.split(/\s+/).filter(Boolean);
const output = [];
const hr = '-'.repeat(80);
let currentLine = '';

for (const word of words) {
  if (word === '<br>') {
    output.push(currentLine);
    currentLine = '';
  } else if (word === '<hr>') {
    if (currentLine.length > 0) {
      output.push(currentLine);
    }
    output.push(hr);
    currentLine = '';
  } else {
    if (currentLine.length === 0) {
      currentLine = word;
    } else {
      if (currentLine.length + 1 + word.length <= 80) {
        currentLine += ' ' + word;
      } else {
        output.push(currentLine);
        currentLine = word;
      }
    }
  }
}

if (currentLine.length > 0) {
  output.push(currentLine);
}

console.log(output.join('\n'));
