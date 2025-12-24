const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString()
);

if (N <= 4) {
  console.log(4);
} else {
  const i = Math.floor(Math.sqrt(N));

  if (i * i === N) {
    console.log(4 * (i - 1));
  } else if (N <= i * (i + 1)) {
    console.log(4 * i - 2);
  } else {
    console.log(4 * i);
  }
}
