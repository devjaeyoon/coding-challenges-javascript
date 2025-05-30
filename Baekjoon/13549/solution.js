const [N, K] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const visited = new Array(100001).fill(false);

function bfs(start) {
  const queue = [[start, 0]];
  visited[start] = true;

  while (queue.length > 0) {
    queue.sort((a, b) => a[1] - b[1]);
    const [position, time] = queue.shift();

    if (position === K) return time;

    if (position * 2 <= 100000 && !visited[position * 2]) {
      visited[position * 2] = true;
      queue.push([position * 2, time]);
    }

    if (position - 1 >= 0 && !visited[position - 1]) {
      visited[position - 1] = true;
      queue.push([position - 1, time + 1]);
    }

    if (position + 1 <= 100000 && !visited[position + 1]) {
      visited[position + 1] = true;
      queue.push([position + 1, time + 1]);
    }
  }
}

console.log(bfs(N));
