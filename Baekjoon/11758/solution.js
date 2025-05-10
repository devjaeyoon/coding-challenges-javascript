const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const coordinates = input.map((line) => line.split(' ').map(Number));
const crossProduct =
  (coordinates[1][0] - coordinates[0][0]) *
    (coordinates[2][1] - coordinates[0][1]) -
  (coordinates[1][1] - coordinates[0][1]) *
    (coordinates[2][0] - coordinates[0][0]);

if (crossProduct > 0) {
  console.log(1);
}
if (crossProduct < 0) {
  console.log(-1);
}
if (crossProduct === 0) {
  console.log(0);
}
