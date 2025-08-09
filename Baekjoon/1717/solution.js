const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const parent = Array.from({ length: n + 1 }, (_, i) => i);

function find(x) {
  let root = x;
  while (parent[root] !== root) {
    root = parent[root];
  }

  let current = x;
  while (parent[current] !== root) {
    const next = parent[current];
    parent[current] = root;
    current = next;
  }

  return root;
}

function union(x, y) {
  const rootX = find(x);
  const rootY = find(y);

  if (rootX !== rootY) {
    if (rootX < rootY) {
      parent[rootY] = rootX;
    } else {
      parent[rootX] = rootY;
    }
  }
}

const result = [];

for (let i = 0; i < m; i++) {
  const [op, a, b] = input[i].split(' ').map(Number);

  if (op === 0) {
    union(a, b);
  } else if (op === 1) {
    const rootA = find(a);
    const rootB = find(b);

    if (rootA === rootB) {
      result.push('YES');
    } else {
      result.push('NO');
    }
  }
}

console.log(result.join('\n'));
