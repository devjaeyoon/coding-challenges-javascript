const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length; i++) {
  const [L, P, V] = input[i].split(' ').map(Number);

  if (L === 0 && P === 0 && V === 0) {
    break;
  }

  console.log(`Case ${i + 1}: ${Math.floor(V / P) * L + Math.min(V % P, L)}`);
}
