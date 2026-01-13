const [n, k] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

if (k === n) {
  console.log('Impossible');
} else {
  const result = new Array(n + 1);

  for (let i = 1; i <= n - k; i++) {
    if (i === n - k) {
      result[i] = 1;
    } else {
      result[i] = i + 1;
    }
  }

  for (let i = n - k + 1; i <= n; i++) {
    result[i] = i;
  }

  console.log(result.slice(1).join(' '));
}
