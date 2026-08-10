/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const inorderIndex = new Map();

  for (let i = 0; i < inorder.length; i++) {
    inorderIndex.set(inorder[i], i);
  }

  let postorderIndex = postorder.length - 1;

  const build = (left, right) => {
    if (left > right) {
      return null;
    }

    const rootValue = postorder[postorderIndex--];
    const root = new TreeNode(rootValue);
    const mid = inorderIndex.get(rootValue);

    root.right = build(mid + 1, right);
    root.left = build(left, mid - 1);

    return root;
  };

  return build(0, inorder.length - 1);
};
