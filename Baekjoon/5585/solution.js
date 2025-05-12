const charge = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let change = 1000 - charge;
let changeCount = 0;

if (change >= 500) {
  const count = Math.floor(change / 500);
  change -= count * 500;
  changeCount += count;
}
if (change >= 100) {
  const count = Math.floor(change / 100);
  change -= count * 100;
  changeCount += count;
}
if (change >= 50) {
  const count = Math.floor(change / 50);
  change -= count * 50;
  changeCount += count;
}
if (change >= 10) {
  const count = Math.floor(change / 10);
  change -= count * 10;
  changeCount += count;
}
if (change >= 5) {
  const count = Math.floor(change / 5);
  change -= count * 5;
  changeCount += count;
}
changeCount += change;

console.log(changeCount);