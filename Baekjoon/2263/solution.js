const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input.shift());
const inorder = input[0].split(' ').map(Number);
const postorder = input[1].split(' ').map(Number);

const inorderIndexMap = new Map();
for (let i = 0; i < n; i++) {
  inorderIndexMap.set(inorder[i], i);
}

const result = [];

function buildPreorder(inStart, inEnd, postStart, postEnd) {
  if (inStart > inEnd || postStart > postEnd) {
    return;
  }

  const root = postorder[postEnd];
  result.push(root);

  const rootIndex = inorderIndexMap.get(root);
  const leftSize = rootIndex - inStart;

  buildPreorder(inStart, rootIndex - 1, postStart, postStart + leftSize - 1);
  buildPreorder(rootIndex + 1, inEnd, postStart + leftSize, postEnd - 1);
}

buildPreorder(0, n - 1, 0, n - 1);

console.log(result.join(' '));
