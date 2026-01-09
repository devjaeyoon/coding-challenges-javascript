const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());
let lineIdx = 0;

for (let i = 0; i < T; i++) {
  const [B, C] = input[lineIdx++].trim().split(' ').map(Number);
  const events = [];

  for (let j = 0; j < B; j++) {
    const parts = input[lineIdx++].trim().split(' ');
    const startDateStr = parts[1];
    const startTimeStr = parts[2];
    const endDateStr = parts[3];
    const endTimeStr = parts[4];

    const start = new Date(`${startDateStr}T${startTimeStr}`).getTime();
    const end =
      new Date(`${endDateStr}T${endTimeStr}`).getTime() + C * 60 * 1000;

    events.push({ time: start, type: 1 });
    events.push({ time: end, type: -1 });
  }

  events.sort((a, b) => {
    if (a.time === b.time) {
      return a.type - b.type;
    }
    return a.time - b.time;
  });

  let maxRooms = 0;
  let currentRooms = 0;

  for (let k = 0; k < events.length; k++) {
    currentRooms += events[k].type;
    if (currentRooms > maxRooms) {
      maxRooms = currentRooms;
    }
  }

  console.log(maxRooms);
}
