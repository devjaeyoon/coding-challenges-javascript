const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const points = [];

for (let i = 1; i <= N; i++) {
  const [x, r] = input[i].split(' ').map(Number);

  points.push({ val: x - r, type: 0, index: i });
  points.push({ val: x + r, type: 1, index: i });
}

points.sort((a, b) => a.val - b.val);

const stack = [];
let isPossible = true;

for (let i = 0; i < points.length; i++) {
  const cur = points[i];

  if (i > 0 && points[i].val === points[i - 1].val) {
    isPossible = false;
    break;
  }

  if (cur.type === 0) {
    stack.push(cur.index);
  } else {
    if (stack.length === 0 || stack[stack.length - 1] !== cur.index) {
      isPossible = false;
      break;
    }
    stack.pop();
  }
}

if (isPossible) {
  console.log('YES');
} else {
  console.log('NO');
}
