const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);

const dancers = new Set();
dancers.add('ChongChong');

for (let i = 1; i <= N; i++) {
  const [personA, personB] = input[i].trim().split(' ');

  if (dancers.has(personA) || dancers.has(personB)) {
    dancers.add(personA);
    dancers.add(personB);
  }
}

console.log(dancers.size);
