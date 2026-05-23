/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head || k === 1) {
    return head;
  }

  let dummy = new ListNode(0);
  dummy.next = head;
  let prevGroupEnd = dummy;

  while (true) {
    let kthNode = prevGroupEnd;
    for (let i = 0; i < k; i++) {
      kthNode = kthNode.next;

      if (!kthNode) {
        break;
      }
    }

    if (!kthNode) {
      break;
    }

    let groupStart = prevGroupEnd.next;
    let nextGroupStart = kthNode.next;

    let prev = nextGroupStart;
    let curr = groupStart;
    for (let i = 0; i < k; i++) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    prevGroupEnd.next = kthNode;
    prevGroupEnd = groupStart;
  }

  return dummy.next;
};
