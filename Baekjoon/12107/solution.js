const N = Number(require('fs').readFileSync('/dev/stdin'));

if (N === 1) {
  console.log('B');
} else {
  console.log('A');
}
