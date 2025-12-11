const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

for (const line of input) {
  const [num1, num2] = line.trim().split(/\s+/).map(Number);

  if (num1 === 0 && num2 === 0) {
    break;
  }

  let a = Math.max(num1, num2);
  let b = Math.min(num1, num2);

  let isATurn = true;

  while (true) {
    if (a % b === 0 || a >= 2 * b) {
      break;
    }

    let nextA = b;
    let nextB = a - b;

    a = nextA;
    b = nextB;

    isATurn = !isATurn;
  }

  if (isATurn) {
    console.log('A wins');
  } else {
    console.log('B wins');
  }
}
