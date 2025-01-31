const year = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log(isLeapYear ? 1 : 0);
