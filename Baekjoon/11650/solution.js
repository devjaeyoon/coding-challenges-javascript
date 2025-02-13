const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const coordinates = input.slice(1).map((line) => line.split(' ').map(Number));

coordinates.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

for (const coordinate of coordinates) {
  console.log(coordinate[0], coordinate[1]);
}

for (const coordinate of coordinates) {
  console.log(coordinate[0], coordinate[1]);
}
