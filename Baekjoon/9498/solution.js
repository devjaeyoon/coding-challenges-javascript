const score = Number(
  require('fs').readFileSync('/dev/stdin').toString().trim()
);

if (score >= 90 && score <= 100) {
  console.log('A');
}
if (score >= 80 && score <= 89) {
  console.log('B');
}
if (score >= 70 && score <= 79) {
  console.log('C');
}
if (score >= 60 && score <= 69) {
  console.log('D');
}
if (score < 60) {
  console.log('F');
}
