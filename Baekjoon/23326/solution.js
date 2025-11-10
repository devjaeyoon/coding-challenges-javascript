const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, Q] = input.shift().split(' ').map(Number);
const initialAttractions = input.shift().split(' ').map(Number);
const queries = input.map((line) => line.split(' ').map(Number));

const tree = new Array(4 * N).fill(0);

function init(node, start, end) {
  if (start === end) {
    tree[node] = initialAttractions[start];
    return tree[node];
  }

  const mid = Math.floor((start + end) / 2);
  tree[node] = init(node * 2, start, mid) + init(node * 2 + 1, mid + 1, end);

  return tree[node];
}

function update(node, start, end, index, newValue) {
  if (index < start || index > end) {
    return tree[node];
  }
  if (start === end) {
    tree[node] = newValue;
    return tree[node];
  }

  const mid = Math.floor((start + end) / 2);
  tree[node] =
    update(node * 2, start, mid, index, newValue) +
    update(node * 2 + 1, mid + 1, end, index, newValue);

  return tree[node];
}

function findFirstAttraction(node, start, end, L, R) {
  if (R < start || L > end) {
    return Infinity;
  }
  if (tree[node] === 0) {
    return Infinity;
  }
  if (start === end) {
    return start;
  }

  const mid = Math.floor((start + end) / 2);
  const leftResult = findFirstAttraction(node * 2, start, mid, L, R);

  if (leftResult !== Infinity) {
    return leftResult;
  }

  return findFirstAttraction(node * 2 + 1, mid + 1, end, L, R);
}

init(1, 0, N - 1);
let currentPos = 0;
const results = [];

for (const query of queries) {
  const [type, value] = query;

  switch (type) {
    case 1: {
      const index = value - 1;
      initialAttractions[index] = 1 - initialAttractions[index];
      update(1, 0, N - 1, index, initialAttractions[index]);
      break;
    }
    case 2: {
      currentPos = (currentPos + value) % N;
      break;
    }
    case 3: {
      const totalAttractions = tree[1];
      if (totalAttractions === 0) {
        results.push(-1);
        break;
      }

      let nextAttraction = findFirstAttraction(1, 0, N - 1, currentPos, N - 1);

      if (nextAttraction !== Infinity) {
        results.push(nextAttraction - currentPos);
      } else {
        nextAttraction = findFirstAttraction(1, 0, N - 1, 0, currentPos - 1);
        const distance = N - currentPos + nextAttraction;
        results.push(distance);
      }
      break;
    }
  }
}

console.log(results.join('\n'));
