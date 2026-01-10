const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const [R, B, M] = input[i].trim().split(' ').map(Number);

  let balance = Math.round(B * 100);
  let payment = Math.round(M * 100);

  let months = 0;
  let possible = true;

  while (balance > 0) {
    months++;

    if (months > 1200) {
      possible = false;
      break;
    }

    const interest = Math.round(balance * (R / 100));

    balance += interest;
    balance -= payment;
  }

  if (possible) {
    console.log(months);
  } else {
    console.log('impossible');
  }
}
