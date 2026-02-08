const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const startNum = Number(input[0]);
const left = Number(input[1]);
const right = Number(input[2]);
const n = Number(input[3]);

const counts = Array.from({ length: 3 }, () => Array(21).fill(null));

counts[0][0] = [1, 0, 0];
counts[1][0] = [0, 1, 0];
counts[2][0] = [0, 0, 1];

const rules = [
  [0, 2, 1],
  [1, 0, 0],
  [1, 2, 1],
];

for (let i = 1; i <= n; i++) {
  for (let num = 0; num < 3; num++) {
    const nextCounts = [0, 0, 0];
    const rule = rules[num];

    for (let child of rule) {
      nextCounts[0] += counts[child][i - 1][0];
      nextCounts[1] += counts[child][i - 1][1];
      nextCounts[2] += counts[child][i - 1][2];
    }
    counts[num][i] = nextCounts;
  }
}

const powerOf3 = [1];
for (let i = 1; i <= 20; i++) {
  powerOf3.push(powerOf3[i - 1] * 3);
}

const result = [0, 0, 0];

function countNumbersInRange(currentNum, currentLevel, offset) {
  const rangeLen = powerOf3[currentLevel];
  const rangeEnd = offset + rangeLen - 1;

  if (rangeEnd < left || offset > right) {
    return;
  }

  if (offset >= left && rangeEnd <= right) {
    const cnt = counts[currentNum][currentLevel];
    result[0] += cnt[0];
    result[1] += cnt[1];
    result[2] += cnt[2];

    return;
  }

  if (currentLevel > 0) {
    const nextLevel = currentLevel - 1;
    const subLen = powerOf3[nextLevel];
    const childRules = rules[currentNum];

    countNumbersInRange(childRules[0], nextLevel, offset);
    countNumbersInRange(childRules[1], nextLevel, offset + subLen);
    countNumbersInRange(childRules[2], nextLevel, offset + subLen * 2);
  }
}

countNumbersInRange(startNum - 1, n, 0);

console.log(result.join(' '));
