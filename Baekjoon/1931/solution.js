const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const meetingSchedules = input
  .slice(1)
  .map((line) => line.split(' ').map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

let maxMeetingCount = 0;
let currentMeetingEndTime = 0;

meetingSchedules.forEach((meetingSchedule) => {
  if (meetingSchedule[0] >= currentMeetingEndTime) {
    maxMeetingCount += 1;
    currentMeetingEndTime = meetingSchedule[1];
  }
});

console.log(maxMeetingCount);
