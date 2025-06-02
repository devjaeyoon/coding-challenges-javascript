const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const cardInformations = new Map();

input.map((line) => {
  const [fruit, count] = line.split(' ');

  if (cardInformations.has(fruit)) {
    const currentFruitCount = cardInformations.get(fruit);
    cardInformations.set(fruit, currentFruitCount + Number(count));
  } else {
    cardInformations.set(fruit, Number(count));
  }
});

console.log([...cardInformations.values()].includes(5) ? 'YES' : 'NO');
