const [dice1, dice2, dice3] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

if (dice1 === dice2 && dice1 === dice3) {
  console.log(10000 + dice1 * 1000);
} else if (dice1 === dice2) {
  console.log(1000 + dice1 * 100);
} else if (dice1 === dice3) {
  console.log(1000 + dice1 * 100);
} else if (dice2 === dice3) {
  console.log(1000 + dice2 * 100);
} else {
  console.log(Math.max(dice1, dice2, dice3) * 100);
}
