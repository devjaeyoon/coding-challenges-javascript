const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const colors = [];
const numbers = [];
input.forEach((card) => {
  const [color, number] = card.split(' ');
  colors.push(color);
  numbers.push(parseInt(number));
});

numbers.sort((a, b) => a - b);

const colorMap = new Map();
const numberMap = new Map();

for (let i = 0; i < 5; i++) {
  colorMap.set(colors[i], (colorMap.get(colors[i]) || 0) + 1);
  numberMap.set(numbers[i], (numberMap.get(numbers[i]) || 0) + 1);
}

const numberCounts = new Map();
for (const [number, count] of numberMap) {
  if (!numberCounts.has(count)) {
    numberCounts.set(count, []);
  }
  numberCounts.get(count).push(number);
}

let score = 0;

const isFlush = colorMap.size === 1;
const isStraight = numbers[4] - numbers[0] === 4 && numberMap.size === 5;
const highestNum = numbers[4];

if (isFlush && isStraight) {
  score = 900 + highestNum;
} else if (numberCounts.has(4)) {
  const [num] = numberCounts.get(4);
  score = 800 + num;
} else if (numberCounts.has(3) && numberCounts.has(2)) {
  const [num3] = numberCounts.get(3);
  const [num2] = numberCounts.get(2);
  score = 700 + num3 * 10 + num2;
} else if (isFlush) {
  score = 600 + highestNum;
} else if (isStraight) {
  score = 500 + highestNum;
} else if (numberCounts.has(3)) {
  const [num] = numberCounts.get(3);
  score = 400 + num;
} else if (numberCounts.has(2) && numberCounts.get(2).length === 2) {
  const pairs = numberCounts.get(2).sort((a, b) => a - b);
  score = 300 + pairs[1] * 10 + pairs[0];
} else if (numberCounts.has(2)) {
  const [num] = numberCounts.get(2);
  score = 200 + num;
} else {
  score = 100 + highestNum;
}

console.log(score);
