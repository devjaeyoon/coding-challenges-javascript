const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const n = parseInt(input[0].match(/\d+/)[0], 10);

const hexStrings = input.join(' ').match(/0x[0-9a-fA-F]{2}/g);

const image = Array.from({ length: n }, () => new Uint8Array(n));

let hexIndex = 0;
for (let r = 0; r < n; r++) {
  for (let c = 0; c < n; c += 8) {
    const val = parseInt(hexStrings[hexIndex++], 16);

    for (let k = 0; k < 8; k++) {
      image[r][c + k] = (val & (1 << k)) !== 0 ? 1 : 0;
    }
  }
}

function encode(row, col, size) {
  const firstPixel = image[row][col];
  let isSame = true;

  for (let i = row; i < row + size; i++) {
    for (let j = col; j < col + size; j++) {
      if (image[i][j] !== firstPixel) {
        isSame = false;
        break;
      }
    }

    if (!isSame) {
      break;
    }
  }

  if (isSame) {
    return firstPixel === 1 ? 'B' : 'W';
  }

  const half = size / 2;
  return (
    'Q' +
    encode(row, col, half) +
    encode(row, col + half, half) +
    encode(row + half, col, half) +
    encode(row + half, col + half, half)
  );
}

console.log(n);
console.log(encode(0, 0, n));
