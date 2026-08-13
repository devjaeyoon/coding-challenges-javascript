/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  const values = [];

  while (head) {
    values.push(head.val);
    head = head.next;
  }

  const buildTree = (left, right) => {
    if (left > right) {
      return null;
    }

    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(values[mid]);

    node.left = buildTree(left, mid - 1);
    node.right = buildTree(mid + 1, right);

    return node;
  };

  return buildTree(0, values.length - 1);
};
