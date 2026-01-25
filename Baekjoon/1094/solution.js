const X = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString(),
);

console.log(X.toString(2).split('1').length - 1);
