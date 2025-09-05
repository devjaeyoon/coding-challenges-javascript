const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const periods = input.map((line) => line.split(' '));

const dateToMonths = (dateStr) => {
  const [year, month] = dateStr.split('-').map(Number);

  return year * 12 + month;
};

const monthsToDate = (totalMonths) => {
  const year = Math.floor((totalMonths - 1) / 12);
  const month = ((totalMonths - 1) % 12) + 1;

  return `${year}-${String(month).padStart(2, '0')}`;
};

const delta = {};

for (let i = 0; i < N; i++) {
  const [startStr, endStr] = periods[i];

  const startMonth = dateToMonths(startStr);
  const endMonth = dateToMonths(endStr);

  delta[startMonth] = (delta[startMonth] || 0) + 1;
  delta[endMonth + 1] = (delta[endMonth + 1] || 0) - 1;
}

const sortedMonths = Object.keys(delta)
  .map(Number)
  .sort((a, b) => a - b);

let currentSoldiers = 0;
let maxSoldiers = 0;
let bestMonth = 0;

for (const month of sortedMonths) {
  currentSoldiers += delta[month];

  if (currentSoldiers > maxSoldiers) {
    maxSoldiers = currentSoldiers;
    bestMonth = month;
  }
}

console.log(monthsToDate(bestMonth));
