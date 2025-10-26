const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());

function timeToMs(timeStr) {
  const [time, msStr] = timeStr.split('.');
  const [HH, MM, SS] = time.split(':').map(Number);
  const ms = Number(msStr);
  const totalMs = (HH * 3600 + MM * 60 + SS) * 1000 + ms;

  return totalMs;
}

const events = [];
for (let i = 0; i < N; i++) {
  const [arrivalStr, departureStr] = input[i].split(' ');

  events.push({ time: timeToMs(arrivalStr), type: 1 });
  events.push({ time: timeToMs(departureStr), type: -1 });
}

events.sort((a, b) => {
  if (a.time !== b.time) {
    return a.time - b.time;
  }

  return a.type - b.type;
});

let currentBuses = 0;
let maxBuses = 0;

for (const event of events) {
  currentBuses += event.type;
  maxBuses = Math.max(maxBuses, currentBuses);
}

console.log(maxBuses);
