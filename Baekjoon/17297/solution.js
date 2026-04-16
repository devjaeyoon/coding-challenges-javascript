let M = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString(),
);

const messiLengths = [0, 5, 13];
let N = 2;

while (messiLengths[N] < M) {
  N++;
  messiLengths[N] = messiLengths[N - 1] + 1 + messiLengths[N - 2];
}

while (N > 2) {
  if (M <= messiLengths[N - 1]) {
    N = N - 1;
  } else if (M === messiLengths[N - 1] + 1) {
    M = -1;
    break;
  } else {
    M = M - messiLengths[N - 1] - 1;
    N = N - 2;
  }
}

let finalCharacter = '';

if (M === -1) {
  finalCharacter = ' ';
} else {
  if (N === 1) {
    finalCharacter = 'Messi'[M - 1];
  } else if (N === 2) {
    finalCharacter = 'Messi Gimossi'[M - 1];
  }
}

if (finalCharacter === ' ') {
  console.log('Messi Messi Gimossi');
} else {
  console.log(finalCharacter);
}
