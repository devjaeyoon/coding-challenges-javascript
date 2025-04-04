const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());

const coordinates = input.map((coordinate) =>
  coordinate.split(' ').map(Number)
);

coordinates.sort((coordinate1, coordinate2) => {
  if (coordinate1[1] === coordinate2[1]) {
    return coordinate1[0] - coordinate2[0];
  }
  return coordinate1[1] - coordinate2[1];
});

console.log(coordinates.map((coordinate) => coordinate.join(' ')).join('\n'));
