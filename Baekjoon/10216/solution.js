const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

function isConnected(c1, c2) {
  const dx = c1.x - c2.x;
  const dy = c1.y - c2.y;
  const distSq = dx * dx + dy * dy;
  const rSumSq = (c1.r + c2.r) ** 2;

  return distSq <= rSumSq;
}

function find(parent, i) {
  if (parent[i] === i) {
    return i;
  }

  return (parent[i] = find(parent, parent[i]));
}

function union(parent, i, j) {
  const rootI = find(parent, i);
  const rootJ = find(parent, j);

  if (rootI !== rootJ) {
    parent[rootJ] = rootI;

    return true;
  }
  return false;
}

let lineIdx = 0;
const T = Number(input[lineIdx++]);
const result = [];

for (let t = 0; t < T; t++) {
  const N = Number(input[lineIdx++]);
  const camps = [];

  for (let i = 0; i < N; i++) {
    const [x, y, r] = input[lineIdx++].trim().split(/\s+/).map(Number);
    camps.push({ x, y, r });
  }

  const parent = Array.from({ length: N }, (_, i) => i);
  let groupCount = N;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (isConnected(camps[i], camps[j])) {
        if (union(parent, i, j)) {
          groupCount--;
        }
      }
    }
  }

  result.push(groupCount);
}

console.log(result.join('\n'));
