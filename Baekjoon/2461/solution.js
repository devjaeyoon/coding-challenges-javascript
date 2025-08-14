const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const classes = input.map((line) => line.split(' ').map(Number));

const allStudents = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    allStudents.push({ ability: classes[i][j], classId: i });
  }
}

allStudents.sort((a, b) => a.ability - b.ability);

let minDiff = Infinity;
let start = 0;

const classCount = new Array(N).fill(0);
let distinctClasses = 0;

for (let end = 0; end < allStudents.length; end++) {
  const endStudent = allStudents[end];

  if (classCount[endStudent.classId] === 0) {
    distinctClasses += 1;
  }

  classCount[endStudent.classId] += 1;

  while (distinctClasses === N) {
    const currentDiff = allStudents[end].ability - allStudents[start].ability;
    minDiff = Math.min(minDiff, currentDiff);

    const startStudent = allStudents[start];

    classCount[startStudent.classId] -= 1;

    if (classCount[startStudent.classId] === 0) {
      distinctClasses -= 1;
    }

    start += 1;
  }
}

console.log(minDiff);
