const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const words = input === '' ? [] : input.split(' ');

console.log(words.length);
