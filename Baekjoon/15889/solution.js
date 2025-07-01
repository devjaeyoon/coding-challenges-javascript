const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const positions = input.shift().split(' ').map(Number);
const ranges = N > 1 ? input.shift().split(' ').map(Number) : [];

const visited = Array(N).fill(false);
const queue = [0];
visited[0] = true;

while (queue.length) {
  const current = queue.shift();
  const maxReach = positions[current] + (ranges[current] || 0);

  for (let next = current + 1; next < N; next++) {
    if (visited[next]) {
      continue;
    }

    if (positions[next] <= maxReach) {
      visited[next] = true;
      queue.push(next);
    } else {
      break;
    }
  }
}

if (visited[N - 1]) {
  console.log('권병장님, 중대장님이 찾으십니다');
} else {
  console.log('엄마 나 전역 늦어질 것 같아');
}
