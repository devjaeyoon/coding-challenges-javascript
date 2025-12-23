const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const recommendCount = Number(input.shift());
const recommendStudentNumbers = input[0].split(' ').map(Number);
const photoFrame = [];

for (let i = 0; i < recommendCount; i++) {
  const currentStudent = recommendStudentNumbers[i];

  const existingIndex = photoFrame.findIndex(
    (item) => item.id === currentStudent
  );

  if (existingIndex !== -1) {
    photoFrame[existingIndex].count++;
  } else {
    if (photoFrame.length < N) {
      photoFrame.push({ id: currentStudent, count: 1, time: i });
    } else {
      photoFrame.sort((a, b) => {
        if (a.count === b.count) {
          return a.time - b.time;
        }
        return a.count - b.count;
      });

      photoFrame.shift();
      photoFrame.push({ id: currentStudent, count: 1, time: i });
    }
  }
}

photoFrame.sort((a, b) => a.id - b.id);

console.log(photoFrame.map((item) => item.id).join(' '));
