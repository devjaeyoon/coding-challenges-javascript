const N = Number(require('fs').readFileSync('/dev/stdin').toString());

for (let i = 0; i < N; i++) {
  const numToString = i.toString();
  const numToStringLength = numToString.length;
  let sum = i;

  for (let i = 0; i < numToStringLength; i++) {
    sum += Number(numToString[i]);
  }

  if (sum === N) {
    console.log(i);
    break;
  }
  if (i === N - 1) {
    console.log(0);
  }
}
