/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) {
    return 0;
  }

  const getHeight = function (node) {
    let height = 0;

    while (node.left) {
      height++;
      node = node.left;
    }

    return height;
  };

  const height = getHeight(root);

  if (height === 0) {
    return 1;
  }

  const exists = function (index) {
    let left = 0;
    let right = Math.pow(2, height) - 1;
    let node = root;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (index <= mid) {
        node = node.left;
        right = mid;
      } else {
        node = node.right;
        left = mid + 1;
      }
    }

    return node !== null;
  };

  let left = 0;
  let right = Math.pow(2, height) - 1;

  while (left < right) {
    const mid = Math.ceil((left + right) / 2);

    if (exists(mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return Math.pow(2, height) - 1 + left + 1;
};
