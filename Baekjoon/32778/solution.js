const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let stationName = '';
let subStationName = '';

for (let i = 0; i < input.length; i++) {
  if (input[i] === '(') {
    stationName = input.slice(0, i - 1);
    subStationName = input.slice(i + 1, input.length - 1);
    break;
  }
}

console.log(stationName === '' ? input : stationName);
console.log(subStationName === '' ? '-' : subStationName);
