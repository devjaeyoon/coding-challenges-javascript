const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString(),
);

const result = Array.from({ length: 7 }, () => Array(N).fill('A'));

function divideAndConquer(day, start, end) {
  if (day === 7) {
    return;
  }

  const mid = Math.floor((start + end + 1) / 2);

  for (let i = mid; i < end; i++) {
    result[day][i] = 'B';
  }

  divideAndConquer(day + 1, start, mid);
  divideAndConquer(day + 1, mid, end);
}

divideAndConquer(0, 0, N);

const output = result.map((row) => {
  if (!row.includes('B')) {
    row[N - 1] = 'B';
  }

  return row.join('');
});

console.log(output.join('\n'));
