const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let roomCount = 1;
let layerCount = 1;

while (roomCount < N) {
  roomCount += layerCount * 6;
  layerCount++;
}

console.log(layerCount);
