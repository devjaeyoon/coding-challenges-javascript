const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString()
);

if (N !== 0) {
  const ternary = N.toString(3);

  if (ternary.includes('2')) {
    console.log('NO');
  } else {
    console.log('YES');
  }
} else {
  console.log('NO');
}
