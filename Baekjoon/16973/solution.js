const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const prefixSum = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
for (let i = 1; i <= N; i++) {
  let col = 1;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === '0' || input[i][j] === '1') {
      const val = input[i][j] === '1' ? 1 : 0;

      prefixSum[i][col] =
        val +
        prefixSum[i - 1][col] +
        prefixSum[i][col - 1] -
        prefixSum[i - 1][col - 1];
      col++;
    }
  }
}

const [H, W, Sr, Sc, Fr, Fc] = input[N + 1].split(' ').map(Number);

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

const visited = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
visited[Sr][Sc] = 1;

const queue = [];
let head = 0;
let tail = 0;

queue[tail++] = Sr;
queue[tail++] = Sc;
queue[tail++] = 0;

let result = -1;

while (head < tail) {
  const r = queue[head++];
  const c = queue[head++];
  const dist = queue[head++];

  if (r === Fr && c === Fc) {
    result = dist;
    break;
  }

  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i];
    const nc = c + dc[i];

    if (nr < 1 || nc < 1 || nr + H - 1 > N || nc + W - 1 > M) continue;
    if (visited[nr][nc]) continue;

    const r2 = nr + H - 1;
    const c2 = nc + W - 1;
    const walls =
      prefixSum[r2][c2] -
      prefixSum[nr - 1][c2] -
      prefixSum[r2][nc - 1] +
      prefixSum[nr - 1][nc - 1];

    if (walls === 0) {
      visited[nr][nc] = 1;
      queue[tail++] = nr;
      queue[tail++] = nc;
      queue[tail++] = dist + 1;
    }
  }
}

console.log(result);
