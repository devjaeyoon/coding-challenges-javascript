const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const string = input[1];

const image = Array.from({ length: n }, () => new Uint8Array(n));
let index = 0;

function decode(row, col, size) {
  const char = string[index++];

  if (char === 'B') {
    for (let i = 0; i < size; i++) {
      image[row + i].fill(1, col, col + size);
    }
  } else if (char === 'Q') {
    const half = size / 2;

    decode(row, col, half);
    decode(row, col + half, half);
    decode(row + half, col, half);
    decode(row + half, col + half, half);
  }
}

decode(0, 0, n);

let output = `#define quadtree_width ${n}\n`;
output += `#define quadtree_height ${n}\n`;
output += `static char quadtree_bits[] = {\n`;

for (let r = 0; r < n; r++) {
  const line = [];

  for (let c = 0; c < n; c += 8) {
    let sum = 0;

    for (let k = 0; k < 8; k++) {
      if (image[r][c + k] === 1) {
        sum += 1 << k;
      }
    }

    let hex = sum.toString(16);
    if (hex.length < 2) {
      hex = '0' + hex;
    }

    line.push(`0x${hex}`);
  }
  output += line.join(',') + ',\n';
}
output += `};\n`;

console.log(output);
