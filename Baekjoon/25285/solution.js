const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function solution(height, weight) {
  if (height < 140.1) {
    return 6;
  }
  if (height >= 140.1 && height < 146) {
    return 5;
  }
  if (height >= 146 && height < 159) {
    return 4;
  }
  if (height >= 159 && height < 161) {
    const BMI = weight / Math.pow(height / 100, 2);

    if (BMI >= 35.0 || BMI < 16) {
      return 4;
    }

    return 3;
  }
  if (height >= 161 && height < 204) {
    const BMI = weight / Math.pow(height / 100, 2);

    if (BMI >= 35.0 || BMI < 16) {
      return 4;
    }

    if ((BMI >= 16 && BMI < 18.5) || (BMI >= 30 && BMI < 35)) {
      return 3;
    }

    if ((BMI >= 18.5 && BMI < 20) || (BMI >= 25.0 && BMI < 30)) {
      return 2;
    }

    return 1;
  }
  if (height >= 204) {
    return 4;
  }
}

const T = Number(input.shift());
const result = [];

for (let i = 0; i < T; i++) {
  const [h, w] = input[i].split(' ').map(Number);

  result.push(solution(h, w));
}

console.log(result.join('\n'));
