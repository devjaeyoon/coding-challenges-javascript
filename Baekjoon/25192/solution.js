const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());

let count = 0;
let greetedUsers = new Set();

for (let i = 0; i < N; i++) {
  const log = input[i].trim();

  if (log === 'ENTER') {
    count += greetedUsers.size;
    greetedUsers.clear();
  } else {
    greetedUsers.add(log);
  }
}

count += greetedUsers.size;

console.log(count);
