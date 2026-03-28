const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [subjCntStr, targetStr] = input[0].trim().split(' ');
const subjCnt = parseInt(subjCntStr, 10);
const minGpa = Math.round(parseFloat(targetStr) * 100);

const scoreMap = {
  'A+': 450,
  A0: 400,
  'B+': 350,
  B0: 300,
  'C+': 250,
  C0: 200,
  'D+': 150,
  D0: 100,
  F: 0,
};

const grades = ['F', 'D0', 'D+', 'C0', 'C+', 'B0', 'B+', 'A0', 'A+'];

let totalCredit = 0;
let currentSum = 0;

for (let i = 1; i < subjCnt; i++) {
  const [creditStr, grade] = input[i].trim().split(' ');
  const credit = parseInt(creditStr, 10);

  totalCredit += credit;
  currentSum += credit * scoreMap[grade];
}

const lastCredit = parseInt(input[subjCnt].trim(), 10);
totalCredit += lastCredit;

let minGrade = 'impossible';

for (const grade of grades) {
  const testSum = currentSum + lastCredit * scoreMap[grade];
  const testGpa = Math.floor(testSum / totalCredit);

  if (testGpa > minGpa) {
    minGrade = grade;
    break;
  }
}

console.log(minGrade);
