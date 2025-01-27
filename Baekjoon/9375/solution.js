const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 1; i < input.length; i++) {
  const n = Number(input[i]);
  const wardrobe = {};

  for (let j = i + 1; j <= i + n; j++) {
    const [name, category] = input[j].split(' ');
    wardrobe[category] = (wardrobe[category] || 0) + 1;
  }

  let result = 1;

  Object.values(wardrobe).map((cnt) => (result *= cnt + 1));
  console.log(result - 1);

  i += n;
}
