const [A, B] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const K = A - B;

if (K <= 0 || B < K) {
  console.log('NO');
  process.exit();
}

const answer = [];
answer.push('YES');
answer.push(K);

for (let i = 0; i < K - 1; i++) {
  answer.push('aba');
}

const remainingCheese = B - (K - 1);

const lastBurger = 'a' + 'ba'.repeat(remainingCheese);
answer.push(lastBurger);

console.log(answer.join('\n'));
