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
var insertionSortList = function (head) {
  const dummy = new ListNode(0);
  let current = head;

  while (current) {
    const next = current.next;

    let prev = dummy;

    while (prev.next && prev.next.val < current.val) {
      prev = prev.next;
    }

    current.next = prev.next;
    prev.next = current;

    current = next;
  }

  return dummy.next;
};
