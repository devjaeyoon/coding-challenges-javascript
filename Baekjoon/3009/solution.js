const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const coordinates = input.map((line) => line.split(' ').map(Number));
const result = { xCoordinates: {}, yCoordinates: {} };

for (const coordinate of coordinates) {
  const [x, y] = coordinate;

  result.xCoordinates[x] === undefined
    ? (result.xCoordinates[x] = 0)
    : (result.xCoordinates[x] += 1);
  result.yCoordinates[y] === undefined
    ? (result.yCoordinates[y] = 0)
    : (result.yCoordinates[y] += 1);
}

const output = [];

for (const x of Object.keys(result.xCoordinates)) {
  if (result.xCoordinates[x] === 0) {
    output.push(x);
  }
}

for (const y of Object.keys(result.yCoordinates)) {
  if (result.yCoordinates[y] === 0) {
    output.push(y);
  }
}

console.log(output.join(' '));
