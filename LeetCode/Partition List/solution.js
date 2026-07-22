/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let lessHead = new ListNode(0);
  let greaterHead = new ListNode(0);

  let less = lessHead;
  let greater = greaterHead;

  let current = head;

  while (current !== null) {
    if (current.val < x) {
      less.next = current;
      less = less.next;
    } else {
      greater.next = current;
      greater = greater.next;
    }
    current = current.next;
  }

  greater.next = null;
  less.next = greaterHead.next;

  return lessHead.next;
};
