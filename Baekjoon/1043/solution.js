const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(/\s+/);

let lineIdx = 0;
const N = input[lineIdx++];
const M = input[lineIdx++];
const truePersonCount = input[lineIdx++];

const parent = Array.from({ length: N + 1 }, (_, i) => i);

function find(x) {
  if (parent[x] === x) {
    return x;
  }

  return (parent[x] = find(parent[x]));
}

function union(x, y) {
  const rootX = find(x);
  const rootY = find(y);

  if (rootX !== rootY) {
    if (rootX === 0) {
      parent[rootY] = 0;
    } else if (rootY === 0) {
      parent[rootX] = 0;
    } else if (rootX < rootY) {
      parent[rootY] = rootX;
    } else {
      parent[rootX] = rootY;
    }
  }
}

for (let i = 0; i < truePersonCount; i++) {
  const person = input[lineIdx++];
  union(0, person);
}

const parties = [];

for (let i = 0; i < M; i++) {
  const partySize = input[lineIdx++];
  const partyPeople = [];

  for (let j = 0; j < partySize; j++) {
    partyPeople.push(input[lineIdx++]);
  }

  parties.push(partyPeople);

  if (partySize > 1) {
    const firstPerson = partyPeople[0];
    for (let j = 1; j < partySize; j++) {
      union(firstPerson, partyPeople[j]);
    }
  }
}

let answer = 0;

for (const party of parties) {
  const representative = party[0];
  if (find(representative) !== find(0)) {
    answer++;
  }
}

console.log(answer);
