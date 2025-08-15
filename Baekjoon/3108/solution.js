const input = require('fs')
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const rects = input.map((line) => {
  const [x1, y1, x2, y2] = line.split(' ').map(Number);

  return {
    x1: Math.min(x1, x2),
    y1: Math.min(y1, y2),
    x2: Math.max(x1, x2),
    y2: Math.max(y1, y2),
  };
});

const parent = Array.from({ length: N }, (_, i) => i);

function find(x) {
  if (parent[x] === x) {
    return x;
  }

  return (parent[x] = find(parent[x]));
}

function union(a, b) {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA !== rootB) {
    parent[rootB] = rootA;
  }
}

function areConnected(r1, r2) {
  const isR2InsideR1 =
    r1.x1 < r2.x1 && r2.x2 < r1.x2 && r1.y1 < r2.y1 && r2.y2 < r1.y2;
  const isR1InsideR2 =
    r2.x1 < r1.x1 && r1.x2 < r2.x2 && r2.y1 < r1.y1 && r1.y2 < r2.y2;

  if (isR1InsideR2 || isR2InsideR1) {
    return false;
  }

  const isSeparate =
    r1.x2 < r2.x1 || r2.x2 < r1.x1 || r1.y2 < r2.y1 || r2.y2 < r1.y1;

  return !isSeparate;
}

function isOriginOnBoundary(rect) {
  const { x1, y1, x2, y2 } = rect;

  if ((0 === x1 || 0 === x2) && 0 >= y1 && 0 <= y2) {
    return true;
  }
  if ((0 === y1 || 0 === y2) && 0 >= x1 && 0 <= x2) {
    return true;
  }

  return false;
}

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (areConnected(rects[i], rects[j])) {
      union(i, j);
    }
  }
}

const visitedRoots = new Array(N).fill(false);
let groupCount = 0;

for (let i = 0; i < N; i++) {
  const root = find(i);

  if (!visitedRoots[root]) {
    visitedRoots[root] = true;
    groupCount += 1;
  }
}

let originOnAnyRect = false;

for (let i = 0; i < N; i++) {
  if (isOriginOnBoundary(rects[i])) {
    originOnAnyRect = true;
    break;
  }
}

if (originOnAnyRect) {
  console.log(groupCount - 1);
} else {
  console.log(groupCount);
}
