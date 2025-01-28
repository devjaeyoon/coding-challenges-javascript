const [A, B] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

if (A > B) {
  console.log('>');
}
if (A < B) {
  console.log('<');
}
if (A === B) {
  console.log('==');
}
