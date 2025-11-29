function getBluRayCount(capacity, lectures) {
  let count = 1;
  let currentSum = 0;

  for (let i = 0; i < lectures.length; i++) {
    if (currentSum + lectures[i] > capacity) {
      count++;
      currentSum = lectures[i];
    } else {
      currentSum += lectures[i];
    }
  }

  return count;
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const lectureTimes = input[0].split(' ').map(Number);

let left = Math.max(...lectureTimes);
let right = lectureTimes.reduce((acc, cur) => acc + cur, 0);
let answer = right;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const count = getBluRayCount(mid, lectureTimes);

  if (count <= M) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
