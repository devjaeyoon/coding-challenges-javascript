const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const passwords = {};

for (let i = 1; i <= N; i++) {
  const [site, password] = input[i].split(' ');

  passwords[site] = password;
}

for (let i = N + 1; i <= N + M; i++) {
  console.log(passwords[input[i]]);
}
