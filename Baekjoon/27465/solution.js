const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

function isPrimeNumber(num) {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

for (let i = N; i <= 1000000000; i++) {
  if (!isPrimeNumber(i)) {
    console.log(i);
    break;
  }
}
