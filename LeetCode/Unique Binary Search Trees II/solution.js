/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) {
    return [];
  }

  const buildTrees = (start, end) => {
    const result = [];

    if (start > end) {
      result.push(null);

      return result;
    }

    for (let i = start; i <= end; i++) {
      const leftSubTrees = buildTrees(start, i - 1);
      const rightSubTrees = buildTrees(i + 1, end);

      for (const left of leftSubTrees) {
        for (const right of rightSubTrees) {
          const root = new TreeNode(i, left, right);
          result.push(root);
        }
      }
    }

    return result;
  };

  return buildTrees(1, n);
};
