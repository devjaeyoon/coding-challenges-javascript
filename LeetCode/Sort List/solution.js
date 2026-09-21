/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const right = slow.next;
  slow.next = null;

  const left = sortList(head);
  const sortedRight = sortList(right);

  return merge(left, sortedRight);
};

const merge = function (left, right) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (left && right) {
    if (left.val <= right.val) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = right.next;
    }

    current = current.next;
  }

  current.next = left || right;

  return dummy.next;
};
