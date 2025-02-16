const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const users = [];

for (let i = 1; i <= N; i++) {
  const [age, name] = input[i].split(' ');

  users.push([Number(age), name]);
}

users.sort((a, b) => a[0] - b[0]);

for (const user of users) {
  console.log(user[0], user[1]);
}
