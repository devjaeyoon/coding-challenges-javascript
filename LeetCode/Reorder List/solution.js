/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  slow.next = null;

  let prev = null;

  while (second) {
    let next = second.next;
    second.next = prev;
    prev = second;
    second = next;
  }

  second = prev;

  let first = head;

  while (second) {
    let firstNext = first.next;
    let secondNext = second.next;

    first.next = second;
    second.next = firstNext;

    first = firstNext;
    second = secondNext;
  }
};
