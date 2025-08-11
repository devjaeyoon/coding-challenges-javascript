const input = require('fs')
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split('\n');

function find(parent, x) {
  if (parent[x] === x) {
    return x;
  }

  return (parent[x] = find(parent, parent[x]));
}

function union(parent, count, x, y) {
  const rootX = find(parent, x);
  const rootY = find(parent, y);

  if (rootX !== rootY) {
    if (rootX < rootY) {
      parent[rootY] = rootX;
      count[rootX] += count[rootY];
    } else {
      parent[rootX] = rootY;
      count[rootY] += count[rootX];
    }
  }

  return count[find(parent, x)];
}

let line = 0;
const T = Number(input[line++]);
const result = [];

for (let i = 0; i < T; i++) {
  const F = Number(input[line++]);

  const parent = {};
  const count = {};
  const nameMap = new Map();
  let nameIndex = 0;

  for (let j = 0; j < F; j++) {
    const [name1, name2] = input[line++].split(' ');

    if (!nameMap.has(name1)) {
      nameMap.set(name1, nameIndex);
      parent[nameIndex] = nameIndex;
      count[nameIndex] = 1;
      nameIndex++;
    }
    if (!nameMap.has(name2)) {
      nameMap.set(name2, nameIndex);
      parent[nameIndex] = nameIndex;
      count[nameIndex] = 1;
      nameIndex++;
    }

    const index1 = nameMap.get(name1);
    const index2 = nameMap.get(name2);

    const networkSize = union(parent, count, index1, index2);
    result.push(networkSize);
  }
}

console.log(result.join('\n'));
